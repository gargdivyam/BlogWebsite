import "./topbar.css";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../redux/action/Action";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import { useState } from "react";

const Topbar = () =>{
    const dispatch = useDispatch();
    const user = useSelector(state=>state.user);

    const handleLogout = (e) =>{
        e.preventDefault();
        dispatch(removeUser());
        localStorage.setItem("user", null);
        window.location.replace("/")
    }

    console.log("user in topbar", user);
    return(
        <div className="topbar-main">
            <ul>
                <a href="/"><li>HOME</li></a>
                {/* <a href="/about"><li>ABOUT</li></a> */}
                <a href="/contact"><li>CONTACT</li></a>
                <a href="/write"><li>WRITE</li></a>
                {/* <a href="/login"><li>LOGIN</li></a> */}
            </ul>
            {
                !user
                ?
                <div className="btnslogreg">
                <ul>
                    <a href="/login" className="loginAnch"><li>LOGIN</li></a>
                    <a href="/register" className="registerAnch"><li>REGISTER</li></a>
                </ul>
                </div>
                :null
            }
            
            { 
                user
                ?
                <div className="userInfo">
                    <div className="userbox">
                        <div className="username"><AccountCircleIcon /> {user.username}</div>
                    </div>
                    <div className="loginbutton">
                        <button className="btnlogout" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
                :null
            }
            
        </div>
    )
}

// const mapStateToProps = (state) =>{
//     return{
//         user: state.user
//     }
// }

export default Topbar;