function UserPresentationCard({ identifiant, nom, pseudo, descript, pfp, imgfond }) {
    return (
      <div className="mt-3 max-w-md mx-auto bg-neutral rounded-xl shadow-md">
        <div className="p-8">
          <div className="uppercase tracking-wide text-indigo-500 text-xl font-semibold">Profil</div>
          <p className="mt-3"> <img src={pfp} alt="- pfp -" width="80" className="rounded-full" />  </p>
          <p className="mt-3"> <span className="text-base text-indigo-300" >Identifiant : </span> {identifiant}</p>
          <p className="mt-3"> <span className="text-base text-indigo-300" >Nom : </span> {nom}</p>
          <p className="mt-3"><span className="text-base text-indigo-300" >Pseudo : </span> @{pseudo}</p>
          <p className="mt-3"><span className="text-base text-indigo-300" >Description : </span> {descript}</p>
          <p className="mt-3"><span className="text-base text-indigo-300" >Votre image de fond : </span> </p>
          <p className="mt-3"> <img src={imgfond} alt="- banière -"  /> </p>
          {/** RAJOUTER onClic */}
          <button className="btn btn-primary mt-6 ">Modifier</button>
            
        </div>
      </div>
    );
  };
  
  export default UserPresentationCard;