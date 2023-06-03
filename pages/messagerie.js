import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import TextMsg from '../components/textMsg';
import EcrireMsg from '../components/EcrireMsg';
import withAuth from './withAuth';
import { useEffect, useState } from 'react';

 function Messagerie(props) {
  const isAuthenticated = true;

  const content = props.users_data;
  console.log(content);
  const [iduser, setIdUser] = useState(0);
  const [compt, setCompt] = useState(0);
  const[sensMsg, setSensMsg] = useState(0); //0 ou 1 considere comme msg reçu par defaut

  //récuperer l'identifiant (mail/nom) de la personne connectée
  useEffect(() => { //pour eviter erreur d'"hydration", va attendre d'avoir les valeurs pour charger page
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setIdUser(parsedUser.id);
      }
    } catch (error) {
      console.log('Erreur lors du parsing du JSON depuis le localStorage');
    }
  }, []);
  console.log("iduser :"+iduser);

  console.log("content: "+content.length);
  //savoir si c'est un msg reçu ou envoyé
  for(let i=0; i<content.length; i++){
    console.log("content :"+content[i].USERID);
    
    //si le msg est envoyé par la personne connectée
    if(content[i].USERID == iduser){
      //le msg est envoyé par l'utilisateur (et non reçu)
      setSensMsg(1);
      console.log("msg envoye :");
    }
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
              <div className="m-2 btn btn-outline flex"> Discussion 1 avec Admin 1</div> 
              <div className="m-2 btn btn-outline flex"> Discussion 2</div>
            </div>
          </div>


          {/** Zone d'une discussion  */}
           <div className='space-y-4 col-span-2 w-5/6 mx-auto bg-base-300 rounded-lg shadow-md'>
              {/** creer une boucle pr charger ts les msgs?
               * Un message  */}
              <TextMsg
                texte = "HOLAaa"
                nomdest = "nom"
                pfpdest = "admin.jpg"
                recu0envoye1 = "0"
              /> 

              {/* Fonction d'affichage remplie avec les résultats de la requete SQL dans api/getMsgs.js */}
              {content.map((post) => (
                <TextMsg
                  texte = {post.TEXTE}
                  nomdest = {post.USERID}
                  pfpdest = {post.PSEUDO}
                  recu0envoye1 = "1" //creer une fonction ici ou ds getMsgs pour determ si l'USERID du msg est le meme que l'utilisateur ou nn
                />  
                //et creer une fonction pour séparer les discussions entre les gens. Autre requete pour obtenir le(s) USERID des destinataires ? (puis une requete par discussion)
                //puis apres faudra afficher selon la discussion cochée (donc recup valeur ici puis l'utiliser dans la requete)
                ))} 

              <TextMsg
                texte = "oui"
                nomdest = "nom"
                pfpdest = "admin.jpg"
                recu0envoye1 = "0"
              />
              <TextMsg
                texte = "oui"
                nomdest = "nom"
                pfpdest = "admin.jpg"
                recu0envoye1 = "1"
              />  

              <EcrireMsg/>
           </div>
            


        </div>


      

      </Layout>   
    </>
  );
}



export async function getStaticProps() {
  
  const users_raw = await fetch('http://localhost:3000/api/getMsgs')
  const users = await users_raw.json()
  const users_data = users.results;

  return {
    props: {
      users_data
    }
  }
}

export default withAuth(Messagerie)