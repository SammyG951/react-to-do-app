import React, { useState } from "react";

function CreateTask(props) {
    const [task, setTask] = useState({
        text: "",
        isComplete: false
    });

    function handleChange(event){
        const name = event.target.value;
        setTask(() => {
            return {text: name, isComplete: false};
        });
    }

    function submitTask(event) {
        console.log(task);
        props.onAdd(task);
        setTask(() => {
           return {
            text: ""
           };
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-task">
                <input 
                    name="text" 
                    placeholder="Enter a new Task!"
                    onChange={handleChange}
                    value={task.text}
                />
                <button 
                    onClick={submitTask}
                >Add</button>
            </form>
        </div>
    );
}

export default CreateTask;