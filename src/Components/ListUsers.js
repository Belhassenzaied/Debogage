import axios from "axios"
import { useEffect, useState } from "react"
import CardUser from "./CardUser"

const ListUsers=()=>{

    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=> setUsers(res.data))
        .then(()=>setLoading(false))
        .catch((error)=>console.log(error))
    },[])
    return(
        <div className="centerBlock">
            <div className="centerCard">
                {
                    loading ? <h1>stana </h1> : users.map((el,i,t)=> <CardUser el={el}/>)
                }
            </div>
        </div>
    )
}

export default ListUsers