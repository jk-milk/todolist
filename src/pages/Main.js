import "./Main.css";
import Button from 'react-bootstrap/Button';
import Header from "../components/Header";
import TextBoxAppendButton from "../components/TextBoxAppendButton";
import { useState } from "react";


const Main = (props) => {
  const [todos, setTodos] = useState(props.data);

  const handleOnchange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const newTodos = todos.map((todo) => (
      {...todo, body: todo.id === Number(e.target.name) ? e.target.value : todo.body}
    ))
    // console.log(newTodos);
    setTodos(newTodos);
  }

  const deleteBox = (id) => {
    // console.log(id);
    const newTodos = todos.filter(x => x.id !== id);
    // console.log(newTodos);
    setTodos(newTodos);
  }

  // console.log(todos);
  return (
    <div className="main">
      <Header />
      <div>
        {todos.map((todo) => ( // todo의 body값을 input 박스 여러개에 뿌림
            <div className="text-box" key={todo.id}>
              <input type="text" name={todo.id} value={todo.body} onChange={handleOnchange} />
              <Button onClick={()=>deleteBox(todo.id)}>-</Button> 
            </div>
          )
        )}
      </div>
      <TextBoxAppendButton todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default Main;