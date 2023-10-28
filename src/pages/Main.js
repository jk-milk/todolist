import "./Main.css";
import Button from 'react-bootstrap/Button';
import Header from "../components/Header";
import TextBoxAppendButton from "../components/TextBoxAppendButton";
import { useEffect, useRef, useState } from "react";


function Main() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos([
      {
        id : 0,
        body: "1"
      },
      {
        id : 1,
        body: "2"
      },
      {
        id : 2,
        body: "3"
      }
    ]);
  }, [])

  const handleOnchange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const newTodos = todos.map((todo) => (
      {...todo, body: todo.id === Number(e.target.name) ? e.target.value : todo.body}
    ))
    // console.log(newTodos);
    setTodos(newTodos);
  }

  const isTodoNull = useRef(false);
  const changeIsTodoNull = (bool) => {
    isTodoNull.current = bool;
  }

  const deleteBox = (id) => {
    // console.log(id);
    // console.log(isTodoNull.current);
    const newTodos = todos.filter(x => x.id !== id);
    // console.log(newTodos);
    if (newTodos.length === 0) isTodoNull.current = true;
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
      <TextBoxAppendButton todos={todos} setTodos={setTodos} isTodoNull={isTodoNull} changeIsTodoNull={changeIsTodoNull} />
    </div>
  );
}

export default Main;