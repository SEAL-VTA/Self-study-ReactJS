import React, { useState } from "react";
import _ from 'lodash'
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";

const Home = () => {
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
        if (!todo) {
            alert(`Todo's ame is not empty`)
        }
        let todoId = randomInt(4, 9999999999)
        let todoItem = {
            id: `todo${todoId}`,
            name: todo
        }

        let currentTodoList = _.clone(listTodo);
        currentTodoList.push(todoItem);
        setListTodo(currentTodoList);
        setTodo("")

        // setListTodo([...listTodo, todoItem]);
    }
    const handleDeleteTodo = (id) => {
        let currentTodoList = _.clone(listTodo);
        currentTodoList = currentTodoList.filter(item => item.id !== id)
        setListTodo(currentTodoList)
    }

    const myInfor = { inGame: 'SEAL', age: 20 }
    return (
        <div>
            <AddTodo
                todo={todo}
                setTodo={setTodo}
                handleClickButton={handleClickButton}
            />
            <br /><br />
            <DisplayTodo
                childData={listTodo}
                name={"SEAL"}
                myInfor={myInfor}
                deleteTodoInParent={handleDeleteTodo}
            />
        </div>
    );
}

// class Home extends React.Component {

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

export default Home;