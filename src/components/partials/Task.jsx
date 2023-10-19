import React, { useState } from "react";

function Task(props) {
    const[isComplete, setIsComplete] = useState(props.isComplete);

    function handleClick(){
        props.onComplete(props.id);
        setIsComplete(() => {
            return !isComplete;
        })
    }

    return (
        <li>
            <p
                onClick={handleClick}
                style={{
                    textDecoration: props.isComplete && "line-through",
                    cursor: "pointer"
                }}
            >{props.task}</p>
        </li>
    );
}

export default Task;