import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import EventPreview from '../components/EventPreview';
import PostPreview from '../components/PostPreview';
import TableEmplois from '../components/TableEmplois';




function Emplois(props) {
  const isAuthenticated = true;

  const content = props.users_data;
  console.log(content);
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

            <div class="overflow-x-auto w-full">
              <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Emplois</th>
                    <th>TYPE</th>
                    <th>REMUNERATION</th>
                    <th>LIEU</th>
                    <th>ENTREPRISE</th>
                    <th>INFOS SUPPLEMENTAIRES</th>
                    <th>POSTULER</th>
                  </tr>
                </thead>
                <tbody>
                  {content.map((user) => (
                  <TableEmplois
                  id={user.EMPLOIID}
                  titre={user.TITRE}
                  type={user.TYPE}
                  remuneration={user.REMUNERATION}
                  lieu={user.LIEU}
                  entreprise={user.ENTREPRISE}
                  infos={user.INFOS}
                  />
                  
                ))}
                </tbody>
              </table>


            </div>
          </div>



        </div>



      </Layout>
    </>
  );
}



export default Emplois

export async function getStaticProps() {
  const users_raw = await fetch('http://localhost:3000/api/getEmplois')
  const users = await users_raw.json()
  const users_data = users.results;
  return {
    props: {
      users_data
    }
  }
}