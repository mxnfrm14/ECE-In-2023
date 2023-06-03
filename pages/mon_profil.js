import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import EventPreview from '../components/EventPreview';
import PostPreview from '../components/PostPreview';
import UserPresentationCard from '../components/UserPresentationCard';
import withAuth from './withAuth';

function Profil(props) {
  const isAuthenticated = true;

  const utilisateur = props.utilisateur_data;
  const [iduser, setIdUser] = useState(0);
  const [compt, setCompt] = useState(0);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setIdUser(parsedUser.id);
      }
    } catch (error) {
      console.log('Erreur lors du parsing du JSON depuis le localStorage');
    }
  }, []);

  const [varPhoto, setVarPhoto] = useState('step-primary');
  const [varImFond, setVarImFond] = useState('step-primary');
  const [varDescr, setVarDescr] = useState('step-primary');
  const [varForma, setVarForma] = useState('');
  const [varTxt, setVarTxt] = useState('Votre profil est presque rempli !');
  const [nbChampsRemplis, setNbChampsRemplis] = useState(3);

  useEffect(() => {
    for (let i = 0; i < utilisateur.length; i++) {
      if (utilisateur[i].IDENTIFIANT === iduser) {
        setCompt(i);
        break;
      }
    }

    let completedFields = 0;

    if (utilisateur[compt]?.PHOTO !== '') {
      completedFields++;
    }
    if (utilisateur[compt]?.BACKING !== null) {
      completedFields++;
    }
    if (utilisateur[compt]?.DESCRIPTION !== '') {
      completedFields++;
    }
    if (utilisateur[compt]?.FORMATION !== null) {
      completedFields++;
    }

    const totalFields = 4; 
    const profileCompletion = (completedFields / totalFields) * 100;
    setNbChampsRemplis(profileCompletion);

    if (profileCompletion === 100) {
      setVarTxt('Votre profil est rempli !');
    }
  }, [iduser]);

  return (
    <>
      <Head>
        <title>Mon Profil | ECE In</title>
      </Head>

      <Layout>
        <div className="m-4">
          <div className="grid grid-cols-5 gap-x-2 justify-items-center">
            <div className="col-span-2 row-span-2">
              <UserPresentationCard
                identifiant={utilisateur[compt]?.IDENTIFIANT}
                nom={utilisateur[compt]?.NOM}
                pseudo={utilisateur[compt]?.PSEUDO}
                descript={utilisateur[compt]?.DESCRIPTION}
                pfp={utilisateur[compt]?.PHOTO}
                imgfond={utilisateur[compt]?.BACKIMG}
              />
            </div>

            <div className="grid justify-items-center content-center">
              <p>{varTxt}</p>
              <br></br>
              <div className="radial-progress" style={{ '--value': nbChampsRemplis }}>
                {nbChampsRemplis}%
              </div>
            </div>

            <ul className="steps steps-vertical mt-6">
              <li className={`step ${varPhoto}`}>Photo</li>
              <li className={`step ${varImFond}`}>Image de fond</li>
              <li className={`step ${varDescr}`}>Description</li>
              <li className={`step ${varForma}`}>Formation(s)</li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const utilisateur_raw = await fetch('http://localhost:3000/api/getUsers');
  const utilisateur = await utilisateur_raw.json();
  const utilisateur_data = utilisateur.results;

  return {
    props: {
      utilisateur_data,
    },
  };
}

export default withAuth(Profil);
