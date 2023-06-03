import AlertePostule from './AlertePostule'

function TableEmplois({id, titre, type, remuneration, lieu, entreprise, infos}) {

  return (
    
          <tr>
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