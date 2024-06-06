import React, { useState } from "react"

const Register = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [login, setLogin] = useState("")
    //TODO* password mb best practise?
    const [password, setPassword] = useState("")

    const handleClickRegister = () => {
        //TODO create func (1)
        console.log(firstName, lastName, login, password)
    }

    const handleClickClear = () => {
        setFirstName("")
        setLastName("")
        setLogin("")
        setPassword("")
    }

    return (
        <div>
            <label>FirstName:
                <input onChange={e => setFirstName(e.target.value.trim())}
                       type={"text"} placeholder={"John"} value={firstName} />
            </label>
            <label>LastName:
                <input onChange={e => setLastName(e.target.value.trim())}
                       type={"text"} placeholder={"Smith"} value={lastName} />
            </label>
            <label>Login:
                <input onChange={e => setLogin(e.target.value.trim())}
                       type={"email"} placeholder={"user-john@gmail.com"} value={login} />
            </label>
            <label>Password:
                <input onChange={e => setPassword(e.target.value.trim())}
                       type={"password"} value={password} />
            </label>
            <button onClick={handleClickRegister}>Register</button>
            <button onClick={handleClickClear}>Clear</button>
        </div>
    )
}

export default Register