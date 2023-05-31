import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import EventPreview from '../components/EventPreview';
import PostPreview from '../components/PostPreview';
import TableReseau from '../components/TableReseau';

function Reseau(props) {
  const isAuthenticated = true;

  const content = props.users_data;
    console.log(content);
  return (
    <>
      <Head>
        <title> Mon Réseau | ECE In </title>
      </Head>

      <Layout>
        
        {content.map((user) => (
          <TableReseau
          nom={user.NOM}
          prenom={user.PRENOM}
          pseudo={user.PSEUDO}
          photo={user.PHOTO}
          description={user.DESCRIPTION}
          role={user.ROLE}
          />
        ))}

        
      
         
        

        

      </Layout>   
    </>
  );
}

export async function getStaticProps() {
  const users_raw = await fetch('http://localhost:3000/api/getReseau')
  const users = await users_raw.json()
  const users_data = users.results;
  return {
    props: {
      users_data
    }
  }
}


export default Reseau