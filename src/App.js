import "./App.css";
import ShowTodo from "./ShowTodo";
import { useState } from "react";

function App() {
  let weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayOfWeek = new Date().getDay();
  let today = weeks[dayOfWeek]

  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");

  let pushTodo = (e) => {
    e.preventDefault();
    
    if (toDo === '') {
      return;
    }
    
    const existingTodo = toDos.find(item => item.text.toLowerCase() === toDo.toLowerCase());
    
    if (existingTodo) {
      // Todo item with similar text already exists
      alert("This task already exists!");
      return;
    }
  
    setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
    setTodo('');
  };
  

  return (
    <div className="App container-fluid">
      <div className="main">
        <div className="title">
        <div className="card">
          <div className="card-body">
            <h2 style={{color: '#331d2c'}}><b>TODO APP</b></h2>
            <h5>Hey it's {today} 🌝 ☕</h5>
          </div>
        </div>
        </div>
        <div className="content row mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={pushTodo}>              
                  <div className="input-group mb-3">
                    <input type="text" className="form-control form-control-lg" value={toDo} onChange={(e)=>{setTodo(e.target.value)}} placeholder="Enter your task..."/>
                    <div className="input-group-append">
                      <button className="btn btn-lg btn-dark" type="submit">Add</button>
                    </div>
                  </div>
                </form>
                <div className="content mt-4">                 
                  <ShowTodo 
                    toDos={toDos}
                    setTodos={setTodos}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6"> 
            <div className="card">
              <div className="card-body">
                <h4 className='mb-4'>Tasks Completed</h4>
                {
                  toDos.map((item)=>{
                    if(item.status){
                      return(
                        <div className="card todo-list m-2" key={item.id}>
                          <p className='my-2'>{item.text}</p>
                        </div>
                      )
                    }
                    return null
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;