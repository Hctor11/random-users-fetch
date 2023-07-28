import { type User } from "./User";

interface Props{
    users: User[]
}

const Table = ({ users }:Props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Pais</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {
                users.map(user => {
                    return(
                        <tr key={user.id.value}>
                            <td>
                                <img src={user.picture.thumbnail} alt="image" />
                            </td>
                            <td>{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.location.country}</td>
                            <td><button>
                                    delete
                                </button></td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
