import React, {useState} from 'react'

export default function LogIn() {
    const [account, setAccount] = useState("")
    const [password, setPassword] = useState("")

    const accountInput = (e)=>{
        setAccount(e.target.value)
    }

    const passwordInput = (e)=>{
        setPassword(e.target.value)
    }

    const logInBtn = async()=>{
        const response = await axios.post("",{})
    }
    
    return (
        <div>
            <input type="text" placeholder="account" onChange={accountInput} />
            <input type="text" placeholder="password" onChange={passwordInput} />
            <button>Log in</button>
        </div>
    )
}
