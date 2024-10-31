import React,{useState} from 'react';
import './App.css';
const Todolist=()=>{
    const [message,setmessage]=useState({text:"",id:"",})
    const [list,setList]=useState([])
    const [editing,setEditing]=useState({id:"",isEditing:false})
    const changemessage=(e)=>{setmessage({...message,text:e.target.value})}
    const handleSubmit=(e)=>{
        e.preventDefault();
        let newtodo={text:message.text,id:new Date().getTime().toString()}
        setList([...list,newtodo])
        setmessage({text:"",id:""})
    }
    const deleting=(id)=>{
        let todo=list.filter((eachobj)=>{
                return eachobj.id!==id
            })
        setList(todo)
    }
    const hediting=(id)=>{
        setEditing({...editing,id:id,isEditing:true})
        let todo=list.find((eachobj)=>eachobj.id===id)
        setmessage({...message,text:todo.text,id:todo.id})
    }
    const handleEdit=(e)=>{
        e.preventDefault()
        let todo=list.map((eachobj)=>{
            if (eachobj.id===editing.id)
                {
                return {text:message.text,id:editing.id}
            }
            else return eachobj
        })
        setmessage({text:"",id:""})
        setEditing({id:"",isEditing:false})
        setList(todo)
    }
    return (
        <div>
            <h1>ToDo List</h1>
            <form>
           <input type='text' name='message' id='message'
           placeholder='Enter your list name' value={message.text} onChange={changemessage} className='heading'/>
           {editing.isEditing?(<button onClick={handleEdit} className='hedit'>Edit</button>):(<button onClick={handleSubmit} className='but add'>Add</button>)}
           </form>
           <div>
           <ul>
            {
                list.map((eachobj)=>
                {
                    const {id,text}=eachobj;
                    return<li key={id}>
                        <span>{text}</span>
                        <button  className="edit"onClick={(e)=>hediting(id)}>Edit</button>
                        <button className='del'onClick={(e)=>deleting(id)} >Delete</button>
                    </li>
                }
                )
            }
           </ul>
           </div>
        </div>
    )
}
export default Todolist;