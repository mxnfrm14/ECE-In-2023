import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import TextMsg from '../components/textMsg';
import EcrireMsg from '../components/EcrireMsg';
import withAuth from './withAuth';
import { useEffect, useState } from 'react';

//fonction determine si l'USERID du msg est le meme que l'utilisateur ou nn
// -> savoir si c'est un msg reçu ou envoyé
/*
function quelSensMsg(idutil, idenvoyeur){
  const[sensMsg, setSensMsg] = useState(0); //0 ou 1 considere comme msg reçu par defaut
  useEffect(() => { 
    //si le msg est envoyé par la personne connectée
    if(idenvoyeur === idutil){
      //le msg est envoyé par l'utilisateur (et non reçu)
      setSensMsg(1);
      console.log("msg envoye :"+idenvoyeur);
    }

  }, [setSensMsg]); //val par défaut de setSensMsg
  return(
      sensMsg
  );
}
*/

//page Messagerie
 function Messagerie(props) {
  const isAuthenticated = true;
 
  //const content = props.users_data;
  const [content, setContent] = useState([]);
  //console.log(content); 
  const [loading, setLoading] = useState(true);
  const [iduser, setIdUser] = useState(''); 
  const [compt, setCompt] = useState(0);
  const[sensMsg, setSensMsg] = useState(0); //0 ou 1 considere comme msg reçu par defaut

  //récuperer l'id (numero) de la personne connectée
  useEffect(() => { //pour eviter erreur d'"hydration", va attendre d'avoir les valeurs pour charger page
    try {
      const storedUser = JSON.parse(localStorage.getItem('user')).id;
      if (storedUser) {
        setIdUser(storedUser); //récuperer l'identifiant de l'utilisateur
        
      }
    } catch (error) {
      console.log('Erreur lors du parsing du JSON depuis le localStorage');
    }
  }, [setIdUser]); //val par defaut de setIdUser

  console.log("iduser av return:"+iduser); //correct uniquemt pr navigateur (pas serveur)
  //donc on va executer la page cote navigateur :

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const me = JSON.parse(localStorage.getItem('user')).id;
        const users_raw = await fetch(`/api/getMsgs?IDENTIFIANT=${me}`); //requete SQL selon id co
        const users = await users_raw.json();
        const users_data = users.results || [];
        //console.log("nb users : "+users_data.length);
        setContent(users_data);
        setLoading(false);
        // console.log(users_data);
        users_data.map((obj) => {
      
            obj.target_msgid = obj.MESSAGEID;
            obj.target_nummsg = obj.NUMEROMSG;
            obj.target_txt = obj.TEXTE;
            obj.target_userid = obj.USERID;
            obj.target_nom = obj.NOM;
            obj.target_pren = obj.PRENOM;
            obj.target_pfp = obj.PHOTO;
            obj.target_friendid = obj.FRIENDID;

            //si le msg est envoyé par la personne connectée
            if(obj.target_userid === me){
              //le msg est envoyé par l'utilisateur (et non reçu)
              obj.target_sensmsg = 1;
              console.log("msg envoye par util :"+obj.target_userid);
            }
            else{
              obj.target_sensmsg = 0;
            }
        });
        setContent(users_data);
        //console.log("taille sortie :"+users_data.length);
        //console.log("donneeeeeeeeeeeeeeeeeees :"+users_data);
        //console.log("fin log");
      } catch (error) {
        console.error(error);
      } 
    };

    fetchData(); 
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title> Messagerie | ECE In </title>
      </Head>

      <Layout>

        <h1 className="m-5 text-5xl font-bold mt-6">
          Messagerie
        </h1>
        
        <div className='my-9 grid grid-cols-3 gap-x-2 justify-items-center'>
          {/** Les discussions */}
          <div className='space-y-4 w-4/6 mx-auto bg-base-300 rounded-lg shadow-md'>
            <div className="mt-4 mx-2 rounded-md badge-primary"> <center> Vos discussions : </center> </div>
            <div className="mx-1">
              <div className="m-2 btn btn-outline flex"> Disc </div> 
              <div className="m-2 btn btn-outline flex"> Discussion 2</div>
            </div>
          </div>


          {/** Zone d'une discussion  */}
           <div className='space-y-4 col-span-2 w-5/6 mx-auto bg-base-300 rounded-lg shadow-md'>
              { console.log("iduser return:"+iduser)}
              {/* Fonction d'affichage remplie avec les résultats de la requete SQL dans api/getMsgs.js */}
              {content.map((msg) => (
                <TextMsg
                  texte = {msg.target_txt}
                  nomdest = {msg.target_pren +" "+ msg.target_nom}  
                  pfpdest = {msg.target_pfp}
                  recu0envoye1 = {msg.target_sensmsg} // 0 ou 1 renvoyé par la fonction
                />  
                //BONUS : fonction pour séparer les discussions entre les gens. 
                //Autre requete pour obtenir le(s) USERID des destinataires ? (puis une requete par discussion)
                //puis apres faudra afficher selon la discussion cochée (donc recup valeur ici puis l'utiliser dans la requete)
                ))} 

              <EcrireMsg/>
           </div>
            


        </div>


      

      </Layout>   
    </>
  ); 
}


/*
export async function getStaticProps() {
  
  const users_raw = await fetch('http://localhost:3000/api/getMsgs')
  const users = await users_raw.json()
  const users_data = users.results;

  return {
    props: {
      users_data
    }
  }
}*/

export default withAuth(Messagerie)