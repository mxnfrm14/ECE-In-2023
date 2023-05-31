import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import EventPreview from '../components/EventPreview';
import PostPreview from '../components/PostPreview';
import UserPresentationCard from '../components/UserPresentationCard';


function Profil(props) {
  const isAuthenticated = true;

  //const content = props.users_data;
  const utilisateur = props.utilisateur_data;
  console.log(utilisateur);
  var varPhoto = "step-primary";
  var varImFond = "step-primary";
  var varDescr = "step-primary";
  var varForma = "";
  var varTxt = "Votre profil est presque rempli !";
  let nbChampsRemplis = 3;

  //verifier si l'utilisateur a complété toutes ses données 
  if(utilisateur[0].PHOTO==""){
    varPhoto = "";
    nbChampsRemplis --;
  }
  if(utilisateur[0].BACKING===null){
    varImFond = "";
    nbChampsRemplis --;
  }  
  if(utilisateur[0].DESCRIPTION==""){
    varDescr = "";
    nbChampsRemplis --;
  }  
  /* Autre requete à faire
  if(utilisateur.FORMATION==null){
    varForma = "";
  } */

  nbChampsRemplis = (nbChampsRemplis/4)*100
  if(nbChampsRemplis==100){
    varTxt = "Votre profil est rempli !";
  }

  return (
    <>
      <Head>
        <title> Mon Profil | ECE In </title>
      </Head>

      <Layout>

        
        <div className="m-4">
          {/* PROFIL */}
          <div className="grid grid-cols-5 gap-x-2 justify-items-center"> 
            <div className="col-span-2 row-span-2"> 

            {/* Fonction remplie avec les retour de la requete SQL dans api/getMonProfil.js*/}
            {utilisateur.map((post) => (
                <UserPresentationCard
                  identifiant={post.IDENTIFIANT}
                  nom={post.NOM}
                  pseudo={post.PSEUDO}
                  descript={post.DESCRIPTION}
                  pfp={post.PHOTO}
                  imgfond={post.BACKIMG}
                />  
              ))}
            </div>
            
            
            {/* ETAT DU PROFIL */}
            {/* Verifier quels champs sont remplis (à faire ou sinn supprimer)
            S'il en manque les afficher et le % de ce qu'il reste à remplir : */}

              <div className="grid justify-items-center content-center">
                <p> {varTxt} </p>
                <br></br>
                <div className="radial-progress" style={{ "--value": nbChampsRemplis }}>{nbChampsRemplis}%</div>
              </div>
              
              <ul className="steps steps-vertical mt-6 ">
                <li className={`step ${varPhoto}`}> Photo</li>
                <li className={`step ${varImFond}`}> Image de fond</li>
                <li className={`step ${varDescr}`}> Description</li>
                <li className={`step ${varForma}`}> Formation(s)</li>
              </ul>
            
            </div>
         
        </div> 

      

      </Layout>   
    </>
  );
}

export async function getStaticProps() {
  /*
  const users_raw = await fetch('http://localhost:3000/api/getUsers')
  const users = await users_raw.json()
  const users_data = users.results;*/

  const utilisateur_raw = await fetch('http://localhost:3000/api/getMonProfil')
  const utilisateur = await utilisateur_raw.json()
  const utilisateur_data = utilisateur.results;

  return {
    props: {
      //users_data,
      utilisateur_data
    }
  }
}

export default Profil