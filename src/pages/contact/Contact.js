import "./contact.css";
import {Row, Col} from "reactstrap";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
const Contact = () =>{
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await axios.post('https://blogpostwebsite-backend.herokuapp.com/api/contact', {
            username: username,
            email: email,
            message: message
        })
        .then((res)=>{
            alert("Your Response is recorded");
            history.push("/");
            console.log(res)
        })
        .catch((e)=>console.log(e)); 
    }

    return(
        <div className="contact-main">
            <div className="container">
            <div className="formContact">
                <Row>
                    <Col style={{paddingLeft: "0px", paddingRight:"0px"}}>
                        <img src="https://cdn.nohat.cc/thumb/f/720/b0cf96ded9934eaf9e47.jpg" alt="" />
                    </Col>
                    <Col style={{paddingLeft: "0px", paddingRight:"0px"}} className="col-right">
                        <form className="formReview" onSubmit={handleSubmit}>
                        <div className="formFeilds">
                            <input type="text" placeholder="name" className="inpContact" onChange={(e)=>setUsername(e.target.value)} />
                            <input type="text" placeholder="Email" className="inpContact" onChange={(e)=>setEmail(e.target.value)} />
                            <textarea placeholder="message" className="inpContact" onChange={(e)=>setMessage(e.target.value)} />
                        </div>
                        <div className="submitBtn">
                            <button className="btnSub" type="submit">Submit</button>
                        </div>
                        </form>
                    </Col>
                </Row>
            </div>
            </div>
        </div>  
    )
}
export default Contact;