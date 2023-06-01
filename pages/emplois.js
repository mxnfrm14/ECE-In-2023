import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import EventPreview from '../components/EventPreview';
import PostPreview from '../components/PostPreview';
import TableEmplois from '../components/TableEmplois';


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
        
      <div class="container mx-auto">
        
        <h1 className="m-5 text-5xl font-bold mt-6">
                Mes Emplois
        </h1>

        <div className="m-5 ">
          <TableEmplois/>
        </div>
        
  

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