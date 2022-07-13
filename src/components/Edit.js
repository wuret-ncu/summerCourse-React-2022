import { useState } from "react";
import { nanoid } from "nanoid";

const Edit = ({addData}) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const changeTitle = (e) =>{
        setTitle(e.target.value);
    }

    const changeContent = (e) =>{
        setContent(e.target.value);
    }

    const handleClick = () =>{
        addData((prev)=>{
            return [...prev,{ title, content, id:nanoid()}]
        })
    }

    return(
        <div className="edit">
            <p>title:</p>
            <input type="text" value={title} onChange={changeTitle}></input>
            <p>content:</p>
            <input type="text" value={content} onChange={changeContent}></input>
            <button className="add" onClick={handleClick}> add Todo</button>
        </div>
    );
}

export default Edit;