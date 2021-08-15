import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { storeUser } from "../../redux/action/Action";

const Login = () =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async(e) =>{
        e.preventDefault();
        await axios.post("https://blogpostwebsite-backend.herokuapp.com/api/auth/login", {
            email,
            password
        }).then((res)=>{
            console.log(res.data);
            if(res.data.message==="Invalid Credentials"){
                alert(res.data.message)
            }else{
                dispatch(storeUser(res.data.user));
                localStorage.setItem("user", JSON.stringify(res.data.user))
                history.push("/")
            }
        }).catch((e)=>{
            console.log(e);
        })
    }

    return(
        <div className="login-main">
            {/* <div className="login-title"> */}
                <span className="login-title">Login</span>
            {/* </div> */}
            <form className="loginForm" onSubmit={handleLogin}>
                <div className="formGroup">
                    <label htmlFor="email" className="lblEmail">
                        Email
                    </label>
                    <input type="text" id="input-email" name="email" className="inpEmail" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="formGroup">
                    <label htmlFor="password" className="lblPassword">
                        Password
                    </label>
                    <input type="password" id="input-password" name="password" className="inpPass" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="submitbtn">
                    <button className="btnFormSubmit">Login</button>
                </div>
            </form>
            <span className="registerSpan">Or Sign Up</span>
            <div className="registerbtn">
                <Link to="/register">
                    <button className="btnRegister">Register</button>
                </Link>
            </div>   
        </div>
    )
}
export default Login;