import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import EventPreview from '../components/EventPreview';
import PostPreview from '../components/PostPreview';

function Reseau(props) {
  const isAuthenticated = true;

  const content = props.users_data;
  // console.log(content);
  return (
    <>
      <Head>
        <title> Mon Réseau | ECE In </title>
      </Head>

      <Layout>
        
        
            
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
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src="https://media.licdn.com/dms/image/C4E03AQFEo5Tb_-L_vw/profile-displayphoto-shrink_800_800/0/1667984961925?e=2147483647&v=beta&t=q6ihAEkfP7Fgjuet886Zv7qYKwXp5NTcu8gHUv1Lc-0" alt="Avatar" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">FROMENTIN Maxence</div>
                    <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
                </td>
                <td>
                Zemlak, Daniel and Leannon
                <br/>
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
                <th>
                <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            {/* row 2 */}
            <tr>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src="https://media.licdn.com/dms/image/D4E03AQEUvWkvfhPx4Q/profile-displayphoto-shrink_800_800/0/1665761550761?e=2147483647&v=beta&t=KHCoGxg0x2I6qHZ8h2DWsXHbU8YZK6T4araQlgrKpmA" alt="Avatar" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">JACQUIN Jeffrey</div>
                    <div className="text-sm opacity-50">China</div>
                    </div>
                </div>
                </td>
                <td>
                Carroll Group
                <br/>
                <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                </td>
                <td>Red</td>
                <th>
                <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            {/* row 3 */}
            <tr>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src="https://media.licdn.com/dms/image/D4E35AQGaffmYJDL0YQ/profile-framedphoto-shrink_100_100/0/1675284070749?e=1686009600&v=beta&t=q71zKmpLXlxsOX8OZquT_E_1j2pVlj9u0_H_AJnouvY" alt="Avatar" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">BORGES Agathe</div>
                    <div className="text-sm opacity-50">Russia</div>
                    </div>
                </div>
                </td>
                <td>
                Rowe-Schoen
                <br/>
                <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                </td>
                <td>Crimson</td>
                <th>
                <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            {/* row 4 */}
            <tr>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                    </div>
                </div>
                </td>
                <td>
                Wyman-Ledner
                <br/>
                <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                </td>
                <td>Indigo</td>
                <th>
                <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            </tbody>
            {/* foot */}
            <tfoot>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
            </tr>
            </tfoot>
            
        </table>
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

export default Reseau