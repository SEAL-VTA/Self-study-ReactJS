import React from "react";

const AddTodo = (props) => {
    const {todo, setTodo, handleClickButton} = props;

    return (
        <div>
            <label>Todo's Name: </label>
            <input value={todo} type="text" onChange={(event) => { setTodo(event.target.value) }} />
            <button type="button" onClick={(event) => { handleClickButton(event, 'button') }}>Submit</button>
        </div>
    )
}

export default AddTodo;