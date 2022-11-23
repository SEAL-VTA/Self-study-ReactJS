import React, { useState } from "react";

const TodoList = () => {
    const [name, setName] = useState("")

    return (
        <div>
            <label>Name: </label>
            <input value={name} type="text" onChange={(event) => setName(event.target.value)}/>
            <br /><br />
            Hello Todo List with name = {name}

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