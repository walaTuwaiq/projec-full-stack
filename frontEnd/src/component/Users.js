import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router'

export default function Users() {
    const [users, setUsers] = useState([])
    const history = useHistory()

    useEffect(() => {
        const getUsers = async()=>{
            const response = await axios.get("http://localhost:5000/users")
            setUsers(response.data)
        }

        getUsers()
    }, [])

const goToUser=(id)=>{
    history.push(`/profile/${id}`)
}

    return (
        <div>
            {
                users.map((elem,index)=>{
                    return <div key={index}>
                        <h3>{elem.account}</h3>
                        <p>{elem.description}</p>
                        <img src={elem.imageProfile} />
                        <button onClick={()=>{goToUser(elem._id)}}>Go</button>
                        { console.log(elem._id)}
                    </div>
                })
            }
        </div>
    )
}
