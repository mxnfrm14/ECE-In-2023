import AlertePostule from './AlertePostule'

function TableEmplois(props) {

    return (
        
        <div class="overflow-x-auto w-full">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>ID</th>
        <th>Emplois</th>
        <th>LIEU</th>
        <th>POSTULER</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr class="bg-base-200">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td><button onClick={AlertePostule} className="btn btn-primary">Je Postule</button></td>
      </tr>
      {/* <!-- row 2 --> */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td><button onClick={AlertePostule} className="btn btn-primary">Je Postule</button></td>
      </tr>
      {/* <!-- row 3 --> */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td><button onClick={AlertePostule} className="btn btn-primary">Je Postule</button></td>
      </tr>
    </tbody>
  </table>
</div>

    );
}

export default TableEmplois;


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