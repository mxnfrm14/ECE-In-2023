import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import EventPreview from '../components/EventPreview';
import PostPreview from '../components/PostPreview';
import {AiOutlinePlus} from 'react-icons/ai';
import {BsGlobeAmericas, BsPeopleFill, BsFillLockFill} from 'react-icons/bs';

function Home(props) {
  const isAuthenticated = true;

  const content = props.users_data;
  // console.log(content);
  return (
    <>
      <Head>
        <title> Accueil | ECE In </title>
      </Head>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold"> Publier un poste </h3>
          {/* <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
          <div className="form-control w-full max-w-xs">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Contenu du poste</span>
              </label>
              <textarea className="textarea textarea-bordered h-24" placeholder="Contenu du poste.."></textarea>
            </div>
            <label className="label">
              <span className="label-text">Choisir une photo ou vidéo</span>
            </label>
            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
          </div>
          <div className="dropdown dropdown-top">
            <label tabIndex={0} className="btn btn-accent mt-5">Qui peut le voir ?</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a><BsGlobeAmericas/>Public</a></li>
              <li><a><BsFillLockFill/>Privé</a></li>
              <li><a><BsPeopleFill/>Amis proches</a></li>
            </ul>
          </div>
          <div className="modal-action">
           <button href="#" className="btn btn-secondary">Publier !</button>
          </div>
        </div>
      </div>

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
          <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Posts</a>
          </div>
          <div className="flex-none">
          <label htmlFor="my-modal-3" className="btn btn-primary gap-2">
            <AiOutlinePlus size={24}/>
            Ajouter un post
          </label>

          </div>
        </div>

        {content.map((user) => (
          <PostPreview
            key={user.USERID}
            pseudo={user.PSEUDO}
            role={user.ROLE}
          />
        ))}

      </div>

      </Layout>   
    </>
  );
}

export async function getStaticProps() {
  const users_raw = await fetch('http://localhost:3000/api/users')
  const users = await users_raw.json()
  const users_data = users.results;
  return {
    props: {
      users_data
    }
  }
}

export default Home