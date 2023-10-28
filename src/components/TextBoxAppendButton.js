import Button from 'react-bootstrap/Button';

function TextBoxAppendButton({todos, setTodos, isTodoNull, changeIsTodoNull}) {

  const hdlClick = ()=>{
    // console.log(isTodoNull.current);
    if(isTodoNull.current === true) {
      changeIsTodoNull(false);
      setTodos([{id:0, body:""}])
    } else {
      setTodos([...todos,{id:todos[todos.length-1].id+1, body:""}]);
    }
  }

  return (
    <>
      <Button variant="primary" size="lg" onClick={hdlClick}>+todo</Button>
    </>
  );
}

export default TextBoxAppendButton;