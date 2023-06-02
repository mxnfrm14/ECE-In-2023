import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import EventPreview from '../components/EventPreview';
import PostPreview from '../components/PostPreview';
import Notif from '../components/Notif'
import withAuth from './withAuth';

function Notifications(props) {
  const isAuthenticated = true;

  const content = props.users_data;
  // console.log(content);
  return (
    <>
      <Head>
        <title> Notifications | ECE In </title>
      </Head>

      <Layout>

      <div class="container mx-auto">
        
      <h1 className="m-5 text-5xl font-bold mt-6">
              Mes Notifications
      </h1>

      {/* <ul className="menu bg-base-100 w-full"> */}

      <div className="mx-5 ">
        <Notif/>
        <Notif/>
        <Notif/>
      </div>
{/* </ul> */}
    
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

export default withAuth(Notifications)