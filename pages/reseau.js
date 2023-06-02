import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import RowTable from '@/components/RowTable';
import withAuth from './withAuth';

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

      <div class="container mx-auto">
        
        <h1 className="m-5 text-5xl font-bold mt-6">
                Mon Réseau
        </h1>
        
        <div className="m-5 "> 

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
          nom={user.NOM}
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


export default withAuth(Reseau);