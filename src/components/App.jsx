import React, { useState } from "react";
import Header from "./partials/Header.jsx";
import Footer from "./partials/Footer.jsx";
import CreateTask from "./partials/CreateTask.jsx";
import Task from "./partials/Task.jsx";

function App() {
    const [tasks, setTasks] = useState([]);

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
        setTasks((prevTasks) => {
            return prevTasks.filter((taskItem) => {
                return !taskItem.isComplete
            })
        });
        console.log(tasks);
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
                    <button 
                        onClick={deleteTasks}
                        className="delete-btn"
                    >Delete</button>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default App;