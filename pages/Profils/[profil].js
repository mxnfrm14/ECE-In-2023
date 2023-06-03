import Head from 'next/head';
import Layout from '../../components/Layout';
import UserPresentationCard from '../../components/UserPresentationCard';
import withAuth from '../withAuth';
import { useRouter } from 'next/router';
import RowTable from '@/components/RowTable';

function Profil(props) {
  const router = useRouter()
  const { user } = router.query
  console.log(props);

  return (
    <>
      <Head>
        <title> Profil utilisateur | ECE In </title>
      </Head>

      <Layout>

        
        <div className="m-4">
          {/* PROFIL */}
          <div className="grid grid-cols-5 gap-x-2 justify-items-center"> 
            <div className="col-span-2 row-span-2"> 

            <h1 className="m-5 text-5xl font-bold mt-6">
                Mon Réseau
            </h1>

            {/* Fonction remplie avec les retour de la requete SQL dans api/getMonProfil.js*/}
            {utilisateur.map((post) => (
                <UserPresentationCard
                  identifiant={post.IDENTIFIANT}
                  nom={post.NOM}
                  pseudo={post.PSEUDO}
                  descript={post.DESCRIPTION}
                  pfp={post.PHOTO}
                  imgfond={post.BACKIMG}
                />  
              ))}
              <h1>Profil: {user}</h1>
              {props.articles_data.reverse().map((article) => (
                <UserPresentationCard content={article.attributes}/>
              ))}

              
            </div>
               
            </div> 
            </div> 
        


      

      </Layout>   
    </>
  );
}

export async function getStaticProps() {
  
  // const users_raw = await fetch('http://localhost:3000/api/getUsers')
  // const users = await users_raw.json()
  // const users_data = users.results;

  const utilisateur_raw = await fetch(`http://localhost:3000/api/getUser?NOM=${user}`) //si on change pas getUser pas ok
  const utilisateur = await utilisateur_raw.json()
  const utilisateur_data = utilisateur.results;

  return {
    props: {
      //users_data,
      utilisateur_data
    }
  }
}

export async function getStaticPaths() {
  const users_raw = await fetch('http://localhost:3000/api/getUsers')
  const users = await users_raw.json()
  const users_data = users.data;
  const paths = users_data.map((tag) => ({
    params: { user: user.attributes.tag },
  }))
  return { paths, fallback: false }
}

export default withAuth(Profil)