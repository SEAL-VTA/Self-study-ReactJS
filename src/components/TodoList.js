import React, { useState } from "react";
import _ from 'lodash'

const TodoList = () => {
    const [todo, setTodo] = useState("")
    const [listTodo, setListTodo] = useState(
        [
            { id: 'todo1', name: 'Watching youtube' },
            { id: 'todo2', name: 'Using facebook' },
            { id: 'todo3', name: 'Reading book' }
        ]
    )

    const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const handleClickButton = () => {
        let todoId = randomInt(4, 9999999999)
        let todoItem = {
            id: `todo${todoId}`,
            name: todo
        }

        let currentTodoList = _.clone(listTodo);
        currentTodoList.push(todoItem);
        setListTodo(currentTodoList)

        // setListTodo([...listTodo, todoItem]);
    }
    const handleDeleteTodo = (id) => {
        let currentTodoList = _.clone(listTodo);
        currentTodoList = currentTodoList.filter(item => item.id !== id)
        setListTodo(currentTodoList)
    }

    return (
        <div>
            <label>Todo's Name: </label>
            <input value={todo} type="text" onChange={(event) => { setTodo(event.target.value) }} />
            <button type="button" onClick={(event) => { handleClickButton(event, 'button') }}>Submit</button>
            <br /><br />

            <div>---- List Todo ----</div>
            {listTodo.map((item, index) => {
                return (
                    <div id={item.id} key={item.id} onClick={() => handleDeleteTodo(item.id)}>{item.name}</div>
                )
            })}
        </div>
    );
}

// class TodoList extends React.Component {

//     state = {
//         name: '',
//     }
//     render() {
//         return (
//             <div>
//                 <label>Name: </label>
//                 <input type="text" onChange={(event)=> this.setState({name: event.target.value})}/>
//                 <br/><br/>
//                 Hello Todo List with name = {this.state.name}

//             </div>
//         );
//     }
// }

export default TodoList;