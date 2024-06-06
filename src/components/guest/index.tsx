import React, {useState} from 'react';
import Register from "./Register";
import Login from "./Login";

const Guest = () => {
    const [isLogin,setIsLogin] = useState(true)
    return (
        <div>
            {isLogin?<Login/>:<Register/>}
            <button onClick={() => setIsLogin(prevState => !prevState)}> {isLogin?"Switch to Register":"Switch to login"} </button>
        </div>
    );
};

export default Guest;