import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from "@mui/material/Zoom";

function CreateTask(props) {
    const [task, setTask] = useState({
        text: "",
        isComplete: false
    });

    const [isZoom, setZoom] = useState(false);

    function handleChange(event){
        const name = event.target.value;
        setTask(() => {
            return {text: name, isComplete: false};
        });
    }

    function submitTask(event) {
        props.onAdd(task);
        setZoom(true);
        setTask(() => {
           return {
            text: ""
           };
        });
        setTimeout(() => {
            setZoom(false);
        }, 75);
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
                <Zoom in={isZoom ? false : true}>
                    <Fab onClick={submitTask}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateTask;