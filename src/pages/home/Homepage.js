import {useState, useEffect} from "react"
import "./homepage.css";
import { Row, Col } from "reactstrap";
import Posts from "../../components/posts/Posts";
import AboutMe from "../../components/aboutMe/AboutMe";
import axios from "axios";
const Homepage = () =>{

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const fetchPosts = async() =>{
            axios.get("https://blogpostwebsite-backend.herokuapp.com/api/posts")
            .then((res)=>{
                console.log(res.data)
                setPosts(res.data);
            }).catch((e)=>console.log(e))
        }
        fetchPosts()
    },[])

    return(
        <div className="homepage-main">
            <div className="heading">
                <h1>BLOG</h1>
            </div>
            <div className="blogImage">
                <img 
                src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=400&w=600" 
                alt="" />
            </div>
            <Row style={{margin: "10px 0px"}}>
                <Col md={8} className="postsDisplay">
                    {
                        posts.map((p, index)=>{
                           return <Posts post={p} key={index}/>
                        })
                    }
                    
                </Col>
                <Col md={4}>
                    <AboutMe />
                </Col>
            </Row>
        </div>
    )
}
export default Homepage;