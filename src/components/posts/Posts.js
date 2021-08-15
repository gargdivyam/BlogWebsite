import { Link } from "react-router-dom";
import "./posts.css";
const Posts = ({post}) =>{
    const PF = "https://blogpostwebsite-backend.herokuapp.com/images/";
    return(
        <div className="post-main">
            <div>
                {
                    post.photo!==undefined
                    ?
                    <img
                    className="postImg"
                    src={PF+post.photo}
                    alt="" />
                    :
                    <img
                    className="postImg"
                    src="https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="" />
                }
                
            
            </div>
                
            <div className="postInfo">
                <div className="postCat">
                    {
                        post.categories.map((cat, index)=>{
                            return <span key={index}>{cat}</span>
                        })
                    }
                </div>
                <div className="postTitle">
                   <Link to={`/post/${post._id}`} className="titleLink">{post.title}</Link> 
                </div>
                <div className="postTime">
                    <span>{new Date(post.createdAt).toDateString()}</span>
                </div>
            </div>
            <div className="postDesc">
                {post.description}
            </div>
            
        </div>
    )
}
export default Posts;