import RowTable from './RowTable';

function Table(props) {

    const content = props.users_data;
    console.log(content);

    return (
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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {/* <tr>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} alt="Avatar" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">{nom} {prenom}</div>
                    <div className="text-sm opacity-50">{pseudo}</div>
                    </div>
                </div>
                </td>
                <td>
                {description}
                <br/>
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>{role}</td>
                <th>
                <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr> */}
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
                                    <div className="text-sm opacity-50">Gefak1</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Le bg de service !
                            <br />
                            {/* <span className="badge badge-ghost badge-sm">Tax Accountant</span> */}
                        </td>
                        <td>Etudiant</td>
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
                                    <div className="text-sm opacity-50">Gatoune</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            En ecole de commerce!
                            <br />
                            {/* <span className="badge badge-ghost badge-sm">Office Assistant I</span> */}
                        </td>
                        <td>etudiante</td>
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
                                        <img src=".\admin.jpg" alt="Avatar" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Test</div>
                                    <div className="text-sm opacity-50">test</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            test
                            <br />
                            {/* <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span> */}
                        </td>
                        <td>test</td>
                        
                    </tr>
                    {/* row 5 (test) */}
                                
                        {/* {content.map((user) => (
                        <RowTable
                        nom={user.NOM}
                        prenom={user.PRENOM}
                        pseudo={user.PSEUDO}
                        photo={user.PHOTO}
                        description={user.DESCRIPTION}
                        role={user.ROLE}
                        />
                        )) } */}
                    
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>NOM</th>
                        <th>Description</th>
                        <th>Role</th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div>


    );
}

export default Table;


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