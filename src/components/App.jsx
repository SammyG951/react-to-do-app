import React, { useState } from "react";
import Header from "./partials/Header.jsx";
import Footer from "./partials/Footer.jsx";
import CreateTask from "./partials/CreateTask.jsx";
import Task from "./partials/Task.jsx";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import Fab from '@mui/material/Fab';
import Zoom from "@mui/material/Zoom";

function App() {
    const [tasks, setTasks] = useState([]);
    const [isZoom, setZoom] = useState(false);

    function addTask(newNote){
        console.log(newNote);
        setTasks((prevTasks) => {
            return [...prevTasks, newNote];
        });
    }

    function toggleCompletetionStatus(id){
        setTasks((prevTasks) => {
            return prevTasks.map((taskItem, index) => {
                if (index === id) {
                    taskItem.isComplete = !taskItem.isComplete;
                }
                return taskItem;
            })
        });
    }

    function deleteTasks(){
        setZoom(true);
        setTasks((prevTasks) => {
            return prevTasks.filter((taskItem) => {
                return !taskItem.isComplete
            })
        });
        setTimeout(() => {
            setZoom(false);
        }, 75);
    }

    return (
        <div>
            <Header />
            <CreateTask 
                onAdd={addTask}
            />
            {tasks.length > 0 && (
                <div>
                    <ul className="task-card">
                    {tasks.map((taskItem, index) => {
                        return (
                            <Task 
                                key={index}
                                id={index}
                                task={taskItem.text}
                                isComplete={taskItem.isComplete}
                                onComplete={toggleCompletetionStatus}
                            />
                        );
                    })}
                    </ul>
                    <div className="delete">
                        <Zoom in={isZoom ? false : true}>
                            <Fab 
                                onClick={deleteTasks}
                                variant="extended"
                            >
                                <DeleteSweepIcon />
                            </Fab>
                        </Zoom>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default App;