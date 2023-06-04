import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import UserPresentationCard from '../../components/UserPresentationCard';

export default function Profil(props) {
  const router = useRouter();
  const { user } = router.query;

  const [loading, setLoading] = useState(true);
  const [utilisateur, setUtilisateur] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const author = JSON.parse(localStorage.getItem('user')).id;
        const response = await fetch(`/api/getUser?IDENTIFIANT=${author}`);
        const data = await response.json();
        const user_data = data.results;   
        console.log(user_data);
        setLoading(false);
        setUtilisateur(user_data);

        console.log('-----------------------------------------------');
        console.log(data.USERID);

      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    }, []);

  return (
    <>
      <Head>
        <title>Profil {utilisateur[0]?.PSEUDO} | ECE In</title>
      </Head>

      <Layout>
        <div className="m-4">
          <div className="grid grid-cols-5 gap-x-2 justify-items-center">
            <div className="col-span-2 row-span-2">
              <h1 className="m-5 text-5xl font-bold mt-6">Profil de {utilisateur[0].PSEUDO}</h1>

              <UserPresentationCard
                identifiant={utilisateur[0].IDENTIFIANT}
                nom={utilisateur[0].NOM}
                pseudo={utilisateur[0].PSEUDO}
                descript={utilisateur[0].DESCRIPTION}
                pfp={utilisateur[0].PHOTO ? `/` + utilisateur[0].PHOTO : ''}
                imgfond={utilisateur[0].BACKIMG ? `/` + utilisateur[0].BACKIMG : ''}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

// export async function getStaticProps(context) {
//   const response = await fetch(`http://localhost:3000/api/getUser?IDENTIFIANT=${context.params.user}`);
//   const data = await response.json();
//   const user_data = data.results[0];

//   return {
//     props: {
//       user_data,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const router = useRouter();
//   const { userQ } = router.query;

//   const response = await fetch(`http://localhost:3000/api/getUser?IDENTIFIANT=${userQ}`);
//   const data = await response.json();
//   const users = data.results;

//   const paths = users.map((user) => ({
//     params: { user: user.USERID.toString() },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }
