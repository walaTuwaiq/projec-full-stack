import React, {useState} from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

export default function LogIn({setToken}) {
    const [account, setAccount] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const accountInput = (e)=>{
        setAccount(e.target.value)
    }

    const passwordInput = (e)=>{
        setPassword(e.target.value)
    }

    const logInBtn = async()=>{
        const response = await axios.post("http://localhost:5000/login",{
            account:account, password:password
        })
        if (response.status === 201){
            setToken(response.data.token)
            localStorage.setItem("token", JSON.stringify(response.data.token))
            history.push("/")
        }
        console.log(response);
    }

    return (
        <div className="butonLogin">
            <input type="text" placeholder="account" onChange={accountInput} />
            <input type="text" placeholder="password" onChange={passwordInput} />
            <button onClick={() => {logInBtn()}}>Log in</button>
        </div>
    )
}
