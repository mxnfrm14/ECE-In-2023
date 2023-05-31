const UserPresentationCard = (props) => {
    return (
      <div className="mt-3 max-w-md mx-auto bg-neutral rounded-xl shadow-md">
          <div className="p-8 ">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold ">Mon profil</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline text-white">{props.UserName}</a>
            <p className="mt-2 text-gray-500">{props.City}</p>
            <p className="mt-2">-Photo-</p>
            <p className="mt-2">Identifiant :</p>
            <p className="mt-2">Nom :</p>
            <p className="mt-2">Pseudo :</p>
            <p className="mt-2">Description :</p>
            <p className="mt-2">Image de fond : aaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <button className="btn btn-primary mt-6">Modifier</button>
        </div>
      </div>
    );
  };
  
  export default UserPresentationCard;