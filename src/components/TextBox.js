import TextDeleteButton from "./TextDeleteButton";
import TextUpdateButton from "./TextUpdateButton";

const TextBox = ({todo, handleOnchange}) => {
  return(
    <>
      <input type="text" name={todo.id} value={todo.body} onChange={handleOnchange} />
      <TextUpdateButton />
      <TextDeleteButton />
    </>
  );
}
export default TextBox;