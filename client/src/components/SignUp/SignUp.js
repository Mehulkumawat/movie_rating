import './SignUp.css';
import { useState} from "react";
import axios from 'axios';

function SignUp(onLoginSuccess) {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function onEmailChange(event){
        setEmail(event.target.value);
    }
    function onNameChange(event){
        setName(event.target.value);
    }
    function onPasswordChange(event){
        setPassword(event.target.value);
    }
    async function onSubmitHandler(event){
        event.preventDefault();
        const user = {name, email, password};
        const response = await axios.post("https::localhost:9000/signup", user);
        const token = response.data.token;
        if(token) {
            localStorage.setItem("token", token);
            onLoginSuccess();
        }
    }
    return (
        <div className="SignUp">
            <form onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input name="Email" type="email" value={email} onChange={onEmailChange}/>
                <label>Name</label>
                <input name="name" type="text" value={name} onChange = {onNameChange}/>   
                <label>password</label> 
                <input name="password" type="password" value={password} onChange={onPasswordChange}/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}
export default SignUp;