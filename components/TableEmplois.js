import AlertePostule from './AlertePostule'

function TableEmplois({id, titre, type, remuneration, lieu, entreprise, infos}) {

  return (
    
          <tr class="bg-base-200">
            <th>{id}</th>
            <td>{titre}</td>
            <td>{type}</td>
            <td>{remuneration}</td>
            <td>{lieu}</td>
            <td>{entreprise}</td>
            <td>{infos}</td>
            <td><AlertePostule /></td>
          </tr>
          

  );
}

export default TableEmplois;


// pour faire l'import de la base de donné quasi la meme chose que pour Reseau

// export async function getStaticProps() {
//     const users_raw = await fetch('http://localhost:3000/api/getReseau')
//     const users = await users_raw.json()
//     const users_data = users.results;
//     return {
//         props: {
//             users_data
//         }
//     }
// }