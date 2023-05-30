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

      <UserPresentationCard/>
        
        <div className="m-4">
          {/* verifier si tous les champs du compte sont remplis */}
          
          {/* si incomplet afficher msg l'indiquand : */}
          <div className="grid justify-items-center">
            <p>Votre profil est presque rempli !</p>
            <br></br>
            <div className="radial-progress text-primary" style={{"--value":70}}>70%</div>
          </div>
          
          <ul className="steps steps-vertical">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Receive Product</li>
          </ul>
          
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