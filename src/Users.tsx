import { useState, useEffect } from "react"
import type { User } from "./User";
import Table from "./Table";

const Users = () => {
    const [Users, setUsers] = useState(Array<User>());
    useEffect(() => {
      fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(res => setUsers(res.results))
        .catch(err => console.error(err))      
    },[])

  return (
    <div>
        <h1>Hola users</h1>
        <Table users={Users}/>
    </div>
  )
}

export default Users