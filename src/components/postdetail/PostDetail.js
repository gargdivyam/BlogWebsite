import "./postdetail.css";
import { useState, useEffect } from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";
import { useParams, useHistory } from "react-router";
import { useSelector } from "react-redux";
const PostDetial = () =>{
    const [updateMode, setUpdateMode] = useState(false);
    const history = useHistory();
    let id = useParams().id;

    const [postInfo, setPostInfo] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const PF = "https://blogpostwebsite-backend.herokuapp.com/images/";

    const user = useSelector(state=>state.user);

    useEffect(()=>{
        const getPostDetail = async() =>{
            await axios.get(`https://blogpostwebsite-backend.herokuapp.com/api/posts/${id}`)
            .then((res)=>{
                setPostInfo(res.data);
                setTitle(res.data.title);
                setDescription(res.data.description);
                console.log("single post details are", res.data)
            })
        }
        getPostDetail();
    },[id])
    
    const handleEdit = async(e) =>{
        e.preventDefault();
        await axios.put(`https://blogpostwebsite-backend.herokuapp.com/api/posts/${postInfo._id}`, {
            title,
            description,
            username: user.username
        })
        .then((res)=>{
            setUpdateMode(false);
            console.log(res.data)
        }
        
        )
        .catch((e)=>console.log(e));
    }

    const handleDelete = async() =>{
        console.log('user in post detail', user)
        await axios.delete(`https://blogpostwebsite-backend.herokuapp.com/api/posts/${id}`, {data:{username:user.username}})
        .then((res)=>{
            console.log(res.data.message);
            history.push("/");
        })
        .catch((e)=>console.log(e));
    }

    return(
        <div className="post-detail">
            <div>
                {
                    postInfo.photo!==undefined 
                    ?
                    <img
                    className="postdetail-img"
                    src={PF+postInfo.photo}
                    alt=""
                    />
                    :
                    <img
                    className="postdetail-img"
                    src="https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    />
                }
                
            </div>
            {
                updateMode ?
                <input type="text" className="inpEditTitle" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                :
                <div className="postdetial-Title">
                    {title}
                </div>
            }
            
            {
                user && user.username===postInfo.username
                ?
                <div className="postdetial-icons">
                    <EditIcon style={{color: "green"}} onClick={()=>setUpdateMode(true)} />
                    <DeleteIcon style={{color: "red"}} onClick={handleDelete} />
                </div>
                :null
            }
            
            <div className="postdetai-Info">
                <div className="author">
                    <span className="author-heading">Author:</span>
                    <span className="author-name">{postInfo.username}</span>
                </div>
                <div className="post-time">
                    <span className="posttime-value">{new Date(postInfo.createdAt).toDateString()}</span>
                </div>
            </div>
            {
                updateMode ?
                <textarea className="inpTextDesc" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
                :
                <div className="postdetail-desc">
                    {/* {postInfo.description} */}
                    {description}
                </div>
            }
            {
                updateMode ?
                <div className="btnUpdatePost">
                    <button className="btnupdateblog" onClick={handleEdit}>Update</button>
                </div>
                :null
            }
            
        </div>
    )
}
export default PostDetial