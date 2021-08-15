import "./aboutMe.css";
import { useState, useEffect } from "react";
import axios from "axios";
const AboutMe = () =>{
    const [category, setCategory] = useState([]);
    useEffect(()=>{
        const getCat = async()=>{
            await axios.get("https://blogpostwebsite-backend.herokuapp.com/api/categories/")
            .then((res)=>
            setCategory(res.data)
            )
            .catch((e)=>console.log("cat not loading",e))
        }

        getCat();
    },[])
    return(
        <div className="aboutme-main">
            <h2 className="aboutHeading">About Me</h2>
            <div className="myImg">
                <img
                src="https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="" />
            </div>
            <div className="myDesc">
            I am equipped with a right blend of technical & behavioral competencies required in a modern digital era with a belief to help and serve the community at a global level. With strong value creation mindset and cognitive load management capabilities, I have evolved during the last one decade through my appropriate academic and experiential learning which paved my path to where I am today.
            </div>
            <div className="category">
                <h2 className="catHeading">Categories</h2>
                {
                    category.map((cat, index)=>{
                        return <span key={index}>{cat.name}</span>
                    })
                }
                {/* <span>Life</span>
                <span>Music</span> */}
            </div>
        </div>
    )
}
export default AboutMe;