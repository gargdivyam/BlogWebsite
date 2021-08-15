import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
const Register = () =>{
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await axios.post("https://blogpostwebsite-backend.herokuapp.com/api/auth/register", {
            username,
            email,
            password
        }).then((res)=>{
            if(res.data.message==="User Already Registered"){
                alert(res.data.message);
            }else{
                history.push("/login")
            }
            console.log(res)
        }).catch((e)=>{console.log(e)})

    }

    return(
        <div className="register-main">
            {/* <div className="register-title"> */}
                <span className="register-title">Register</span>
            {/* </div> */}
            <form className="registerForm" onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label htmlFor="name" className="lblName">
                        Name
                    </label>
                    <input type="text" id="input-name" name="name" className="inpName" onChange={(e)=>setUsername(e.target.value)} />
                </div>
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
                    <button className="btnFormSubmit">Register</button>
                </div>
            </form>
            <span className="registerSpan">Already a User</span>
            <div className="registerbtn">
                <Link to="/login">
                    <button className="btnRegister">Login</button>
                </Link>
            </div>   
        </div>
    )
}
export default Register;