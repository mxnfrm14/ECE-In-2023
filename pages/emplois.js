import Head from 'next/head';
import Link from 'next/link';
import UserPresentationCard from '../components/UserPresentationCard';
import Layout from '../components/Layout';
import EventPreview from '../components/EventPreview';
import PostPreview from '../components/PostPreview';

function Emplois(props) {
  const isAuthenticated = true;

  const content = props.users_data;
  // console.log(content);
  return (
    <>
      <Head>
        <title> Emplois | ECE In </title>
      </Head>

      <Layout>
        
        <div>
            
            <h1>Emplois</h1>
        
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

export default Emplois