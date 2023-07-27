import { useState } from "react"
import type { User } from "./User";

const Users = () => {
    const [Users, setUsers] = useState(Array<User>);

  return (
    <div>
        <h1>Hola users</h1>
    </div>
  )
}

export default Users