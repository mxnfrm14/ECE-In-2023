import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import textMsg from '../components/textMsg';

function Messagerie(props) {
  const isAuthenticated = true;

  const content = props.users_data;
  // console.log(content);
  return (
    <>
      <Head>
        <title> Messagerie | ECE In </title>
      </Head>

      <Layout>

        <h1 className="mb-5 text-5xl font-bold mt-6">
          Messagerie
        </h1>
        
     {/** J'ai pas encore reussi à creer un composant bulle de lsg :((
      <textMsg 
        texte = "HOLAaa"
        nomDest = "nom"
        pfpDest = "admin.jpg"
        recu0Envoiye1 = "1"
      /> 
    */}

            {/** Zone des échanges */}
            <div className='m-5 space-y-4  max-w-md mx-auto bg-base-300 rounded-lg shadow-md'>
          {/**MSG DE L'INTERLOCUTEUR */}
          <div className="m-4 chat chat-start">
            {/**pfp */}
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="admin.jpg" />
              </div>
            </div>
            {/**pseudo */}
            <div className="chat-header">
              Obi-Wan Kenobi
            </div>
            {/**message */}
            <div className="chat-bubble chat-bubble-secondary">message reçu</div>
          </div>

          {/**MSG DE L'UTILISATEUR*/}
          <div className="m-8 chat chat-end">
            <div className="chat-bubble chat-bubble-primary">message envoyé zhnkz zjfnkje edfk fedf eeeeeeeeeeeeeeeeee z</div>
          </div>

        </div> 

      

      </Layout>   
    </>
  );
}

export default Messagerie