import React from 'react';
import './Todos.css'

const Todos = (props) => {
    const { todos } = props;
    console.log({ todos })
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <div className="todo-item">
                        <input type="checkbox" onChange={(event) => props.handleCheck(event, todo)} />
                        <span className={todo.completed ? 'strike' : 'non-strike'}>{todo.work}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Todos;
