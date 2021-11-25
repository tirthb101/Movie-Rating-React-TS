import React, { useState, useContext} from "react";
import { useNavigate } from "react-router";
import API from '../API';


import Button from "./button/button.index";

import { Wrapper } from "./login.style";

import { Context } from "../context";


const Login = () => {

    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    const [ error, setError] = useState(false);
    const [ _user, setUser] = useContext(Context);
    const navigate = useNavigate();

    const handlechnage = (event) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;

        if (name === 'username'){
            setUsername(value);
        }
        else if ( name === 'password') {
            setPassword(value);
        }
    }

    const handlesubmit = async (event) =>{
        setError(false);
        try {
            const requestToken = await (API.getRequestToken());
            const sessionId = await (API.authenticate(
                requestToken,
                username,
                password
                ));
            console.log(requestToken);
            setUser({sessionId: sessionId.session_id, username : username});

            navigate("/")
        }
        catch {
            setError(true);
        }

    }

    return(
        <Wrapper>
            {error ? <div className="error">There was an error</div> : null}
            <label for="Username">Username:</label>
            <input 
                type="text"
                value={username}
                onChange={handlechnage}
                name="username"
                id="Username"
            />
            <label for="password">Password:</label>
            <input 
                type="password"
                value={password}
                onChange={handlechnage}
                name="password"
                id="password"
            />
            <Button text="Submit" callback={handlesubmit} />
        </Wrapper>
    )
}

export default Login;