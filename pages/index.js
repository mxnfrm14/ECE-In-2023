import Head from 'next/head';
import Link from 'next/link';
import UserPresentationCard from '../components/UserPresentationCard';
import Layout from '../components/Layout';
import EventPreview from '../components/EventPreview';
import PostPreview from '../components/PostPreview';

function Home(props) {
  const isAuthenticated = true;

  const content = props.users_data;
  // console.log(content);
  return (
    <>
      <Head>
        <title> Accueil | ECE In </title>
      </Head>

      <Layout>
        
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://news.microsoft.com/wp-content/uploads/prod/sites/113/2018/04/ECE-Paris-Orange-Microsoft.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">
              Bienvenue sur ECE In !
            </h1>
            <p className="mb-5 text-justify">

              ECE In est le réseau social des étudiants et anciens élèves de l'ECE Paris. Il te permet de rester en contact avec tes camarades, de découvrir les anciens élèves de l'école et de trouver un emploi ou un stage.

            </p>

            {
              isAuthenticated ? (            <button className="btn btn-primary"><a href="#content">DÉCOUVRIR</a></button> ) : ( <button className="btn btn-primary"><a href="/login">SE CONNECTER</a></button> )

            }
           
          </div>
        </div>
      </div>

      {/* EVENT */}

      <div className="container mx-auto flex flex-col items-center gap-10" id="content">

        <div className="navbar bg-neutral text-primary-content rounded-xl mt-6">
          <a className="btn btn-ghost normal-case text-xl">Évènements à venir</a>
        </div>

        <EventPreview/>

        <EventPreview/>

      </div>

      {/* FEED */}

      <div className="container mx-auto flex flex-col items-center gap-10" id="feed">

        <div className="navbar bg-neutral text-primary-content rounded-xl mt-6">
          <a className="btn btn-ghost normal-case text-xl">Posts</a>
        </div>

        <PostPreview
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          author={{ name: "John Doe", avatar: "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" }}
        />

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

export default Home