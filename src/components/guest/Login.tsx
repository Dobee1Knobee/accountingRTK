import React, { useState } from "react"

const Login = () =>{

    const [login,setLogin] = useState("");
    const [password,setPassword] = useState("")
    function handleClickLogin() {
        console.log(login,password)
    }

    function handleClickClear() {
        setPassword("")
        setLogin("")
    }

    return (
        <div>
            <label>Login:
                <input onChange={e => setLogin(e.target.value.trim())}
                       type={"email"} placeholder={"user-john@gmail.com"} value={login} />
            </label>
            <label>Password:
                <input onChange={e => setPassword(e.target.value.trim())}
                       type={"password"} value={password} />
            </label>
            <button onClick={handleClickLogin}>Register</button>
            <button onClick={handleClickClear}>Clear</button>
        </div>
    )
}

export default Login