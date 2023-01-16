import React from "react";
import Todoitem from "./Todoitem";

function Todolist (props) {
    return (
        <div>
            {/* {loop over the todos list and get individual todos} */}
            {props.todos.map((item, index) => (
                <Todoitem key={index} item={item}/>
            ))}
        </div>
    )
}
export default Todolist;