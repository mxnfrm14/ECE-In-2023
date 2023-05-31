

function Table({ nom, prenom ,pseudo, photo, description, role }) {
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
