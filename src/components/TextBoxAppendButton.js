import Button from 'react-bootstrap/Button';

function TextBoxAppendButton({todos, setTodos}) {

  const hdlClick = ()=>{
    setTodos([...todos,{id:todos[todos.length-1].id+1, body:""}]);
  }
  return (
    <>
      <Button onClick={hdlClick}>+todo</Button>
    </>
  );
}

export default TextBoxAppendButton;