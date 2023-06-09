import './Login.css';
import { useState} from "react";
import axios from 'axios';

function Login(onLoginSuccess) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function onEmailChange(event){
        setEmail(event.target.value);
    }
    function onPasswordChange(event){
        setPassword(event.target.value);
    }
    async function onSubmitHandler(event){
        event.preventDefault();
        const user = {email, password};
        const response = await axios.post("http::localhost:9000/login", user);
        const token =  response.data.token;
        if(token) {
            localStorage.setItem("token", token);
            onLoginSuccess();
        }
    }
    return (
        <div className="Login">
            <form onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input name="email" type="email" value={email} onSubmit={onEmailChange}/>
                <label>password</label>
                <input name="password" type="password" value={password} onSubmit={onPasswordChange}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;