import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import "./write.css";
import axios from 'axios';
import { useSelector } from 'react-redux';

const Write = () =>{

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const user = useSelector(state => state.user);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            description
        };
        try{
            await axios.post("https://blogpostwebsite-backend.herokuapp.com/api/posts/create", newPost)
            .then((res)=>{
                console.log("post is published", res);
                window.location.replace(`/post/${res.data.post._id}`)
            })
        }catch(e){
            console.log(e)
        }
        // if(file){
        //     const data = new FormData();
        //     const filename = Date.now() + file.name;
        //     data.append("name", filename);
        //     data.append("file", file);
        //     newPost.photo = filename;
        //     try{
        //         await axios.post("https://blogpostwebsite-backend.herokuapp.com/api/upload", data)
        //     }catch(e){
        //         console.log(e)
        //     }
            
        // }
        
    }

    return(
        <div className="write-main">
            <div className="write-img">
                
                <img 
                className="imgWritepost"
                src="https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                />
        
            </div>"
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput" className="lblAdd">
                        <AddIcon />
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={(e=>setTitle(e.target.value))} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput-Textarea" onChange={(e)=>setDescription(e.target.value)} />
                </div>
                <div className="btnWriteSubmit">
                    <button className="writeSubmit" type="submit">Publish</button>
                </div>         
            </form>
        </div>
    )
}
export default Write;