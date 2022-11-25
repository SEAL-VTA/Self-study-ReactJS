import React from "react";

const DisplayTodo = (props) => {
    const deleteTodoFromChild = (id) => {
        props.deleteTodoInParent(id);
    }

    const listTodo = props.childData;
    return (
        <div>
            <div>---- List Todo ----</div>
            {listTodo.map((item, index) => {
                return (
                    <div id={item.id} key={item.id} onClick={() => deleteTodoFromChild(item.id)}>{item.name}</div>
                )
            })}
        </div>
    )
}

export default DisplayTodo