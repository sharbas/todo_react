import React, {useState} from "react";

function ShowTodo({toDos,setTodos}) {

const [editTodoId,setEditTodoId]=useState(null)
const [updatedTodoText,setUpdatedTodoText]=useState('')

let statusChange = (item,e)=>{
    setTodos((prevTodos)=>{
        return prevTodos.map((obj)=>{
            if(obj.id === item.id){
                return {...obj,status:e.target.checked};
            }
            return obj
        })
    })
}


let deleteTodo = (taskId)=>{
  
    if(taskId.status ===toDos.checked){
alert('it is already checked')
    }else{
        setTodos(
            toDos.filter(item=>item.id !==taskId)
        )
    }
    return null
}

let openEditBox = (item)=>{
    setUpdatedTodoText(item.text)
    setEditTodoId(item.id)
}

let updateTask = (id)=>{
    setTodos((prevTodos)=>{
        return prevTodos.map((item)=>{
            if(updatedTodoText ===''){
                return {...item,text:item.text}
            }else{
                if(item.id===id){
                    return {...item,text:updatedTodoText}
                }
            }
            return item
        })
    })
    setUpdatedTodoText('')
    setEditTodoId(null)
}
return (
    toDos.map((item)=>{
        if(editTodoId ===item.id){
            return(
                <div className="card todo-list m-2 p-2" key={item.id}>
                 <div className="todos d-flex justify-content-between">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input  className="m-0" type="checkbox" value={item.status} onChange={(e)=>{statusChange(item,e)}} />
                            </div>
                        </div>
                        <input type="text" className="form-control" value={updatedTodoText} onChange={(e)=>setUpdatedTodoText(e.target.value)} />
                    </div>
                    <i className="fa-sharp fa-solid fa-check my-1 mx-2" style={{color:'#331d2c',cursor:'pointer'}} onClick={()=> updateTask(item.id)}></i>
                    <i className="fa-sharp fa-solid fa-items my-1 mx-2" style={{color: '#331d2c', cursor:'pointer'}} onClick={()=> setEditTodoId(null)}></i>
                 </div>
            
                </div>
            );
        }else{
            return (
                <div className="card todo-list m-2 p-2" key={item.id}>
                    <div className="todos d-flex justify-content-between">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <input className="m-0" type="checkbox" value={item.status} onChange={(e)=>{statusChange(item,e)}} />
                                </div>
                            </div>
                            <p className="m-0">{item.text}</p>
                        </div>
                        <i className="fa-solid fa-pen-to-square my-1 mx-2" onClick={()=>{openEditBox(item)}}></i>
                        <i onClick={()=>deleteTodo(item.id)} className="fa-sharp fa-solid fa-trash my-1 mx-2" style={{color:'#331d2c',cursor:'pointer'}}></i>
                    </div>
                </div>
            )
        }
    })
)
}

export default ShowTodo