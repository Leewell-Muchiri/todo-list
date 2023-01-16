import React from "react";

function Todoitem (props) {

    return (
        <div>
            <h3>{props.item.title}</h3>
            <p>{props.item.description}</p>
        </div>
    )
}
export default Todoitem;