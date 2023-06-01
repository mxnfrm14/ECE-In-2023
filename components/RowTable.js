export default function RowTable({ nom, prenom, pseudo, photo, description, role }) {
    return (
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
        </tr>
    )
};


