import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import RowTable from '@/components/RowTable';
import withAuth from './withAuth';

function Reseau(props) {
  const isAuthenticated = true;

  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const me = JSON.parse(localStorage.getItem('user')).id;
        const users_raw = await fetch(`/api/getReseau?IDENTIFIANT=${me}`);
        const users = await users_raw.json();
        const users_data = users.results || [];
        setContent(users_data);
        setLoading(false);
        console.log(users_data);
        users_data.map((obj) => {
          if (obj.USERID1 === me) {
            obj.target = obj.USERID2;
            obj.target_txt = obj.USERID_TXT2;
            delete obj.USERID2;
            delete obj.USERID_TXT2;
          } else if (obj.USERID2 === me) {
            obj.target = obj.USERID1;
            obj.target_txt = obj.USERID_TXT1;
            delete obj.USERID1;
            delete obj.USERID_TXT1;
          }
        });
        const users_data2 = await Promise.all(users_data.map(async (obj) => {
          const user = await fetch(`/api/getUser?IDENTIFIANT=${obj.target}`);
          const user_data = await user.json();
          obj.PRENOM = user_data.results[0].PRENOM;
          obj.PSEUDO = user_data.results[0].PSEUDO;
          obj.PHOTO = user_data.results[0].PHOTO;
          obj.DESCRIPTION = user_data.results[0].DESCRIPTION;
          obj.ROLE = user_data.results[0].ROLE;
          return obj;
        }));
        setContent(users_data2);
        console.log(users_data2);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Mon Réseau | ECE In</title>
      </Head>

      <Layout>
        <div className="container mx-auto">
          <h1 className="m-5 text-5xl font-bold mt-6">Mon Réseau</h1>

          <div className="m-5">
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {content.map((user) => (
                    <RowTable
                      link={user.NOM}
                      key={user.IDENTIFIANT}
                      nom={user.target_txt}
                      prenom={user.PRENOM}
                      pseudo={user.PSEUDO}
                      photo={user.PHOTO}
                      description={user.DESCRIPTION}
                      role={user.ROLE}
                    />
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <th>NOM</th>
                    <th>Description</th>
                    <th>Role</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default withAuth(Reseau);
