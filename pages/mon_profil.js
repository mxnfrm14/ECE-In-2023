import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import EventPreview from '../components/EventPreview';
import PostPreview from '../components/PostPreview';
import UserPresentationCard from '../components/UserPresentationCard';
import withAuth from './withAuth';

//page Mon profil
function Profil(props) {
  const isAuthenticated = true;

  const [iduser, setIdUser] = useState('');
  const [compt, setCompt] = useState(0);
  const [utilisateur, setUtilisateur] = useState([]);
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);


  //recuperer utlisateur co
  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem('user')).id;
      if (storedUser) {
        setIdUser(storedUser); //récuperer l'identifiant de l'utilisateur
        
      }
    } catch (error) {
      console.log('Erreur lors du parsing du JSON depuis le localStorage');
    }
  }, [setIdUser]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const me = JSON.parse(localStorage.getItem('user')).id;
        const user_raw = await fetch(`/api/getUser?IDENTIFIANT=${me}`);
        const user = await user_raw.json();
        const user_data = user.results || [];
        setContent(user_data);
        setLoading(false);
        console.log(user_data);
        setUtilisateur(user_data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  

  const [varPhoto, setVarPhoto] = useState('step-primary');
  const [varImFond, setVarImFond] = useState('step-primary');
  const [varDescr, setVarDescr] = useState('step-primary');
  const [varForma, setVarForma] = useState('');
  const [varTxt, setVarTxt] = useState('Votre profil est presque rempli !');
  const [nbChampsRemplis, setNbChampsRemplis] = useState(3);

  useEffect(() => {
 
    let completedFields = 0;

    //verifier si les champs sont remplis
    if (utilisateur[compt]?.PHOTO !== '') {
      completedFields++;
    }
    if (utilisateur[compt]?.BACKIMG !== '') {
      completedFields++;
    }
    if (utilisateur[compt]?.DESCRIPTION !== '') {
      completedFields++;
    }
    if (utilisateur[compt]?.FORMATION !== null) {
      completedFields++;
    }
    
    //calculer % de champs remplis du profil
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
              {/** information de l'utilisateur */}
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
              {/**indiquer pourcentage de champs remplis */}
              <div className="radial-progress" style={{ '--value': nbChampsRemplis }}>
                {nbChampsRemplis}%
              </div>
            </div>
            {/**indiquer quels champs sont remplis */}
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

export default withAuth(Profil);
