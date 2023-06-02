import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import TextMsg from '../components/textMsg';
import EcrireMsg from '../components/EcrireMsg';

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
                recu0envoye1 = "1"
              /> 

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

export default Messagerie