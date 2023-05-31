import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import EventPreview from '../components/EventPreview';
import PostPreview from '../components/PostPreview';
import UserPresentationCard from '../components/UserPresentationCard';


function Profil(props) {
  const isAuthenticated = true;

  const content = props.users_data;
  // console.log(content);

  return (
    <>
      <Head>
        <title> Mon Profil | ECE In </title>
      </Head>

      <Layout>

        
        <div className="m-4">

        {/* ETAT DU PROFIL : verifier si tous les champs du compte sont remplis */}
        {/* si incomplet afficher msg l'indiquand : */}
          <div className="grid grid-cols-4 justify-items-center"> 
            <div className="col-span-2 row-span-2"> 
              <UserPresentationCard/> 
            </div>
           
            <div className="grid justify-items-center content-center">
              <p> Votre profil est presque rempli !</p>
              <br></br>
              <div className="radial-progress" style={{"--value":70}}>70%</div>
            </div>
            
            <ul className="steps steps-vertical">
              <li className="step step-primary">Photo</li>
              <li className="step ">Image de fond</li>
              <li className="step step-primary">Description</li>
              <li className="step">Formation(s)</li>
            </ul>
           
          </div>

          {/* INFOS PROFIL */}
          {/* Afficher à partir de la BDD */}
          
         

          
        </div> 

      

      </Layout>   
    </>
  );
}

// export async function getStaticProps() {
//   const users_raw = await fetch('http://192.168.1.254:5443/api/users')
//   const users = await users_raw.json()
//   const users_data = users.results;
//   return {
//     props: {
//       users_data
//     }
//   }
// }

export default Profil