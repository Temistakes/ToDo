import React from "react";
import Tasks from "../Tasks/Tasks";
import TasksForm from "../TasksForm/TasksForm";
import Header from "../Header/Header";
import cl from "./Todo.module.css";

export default function Todo({
    unpassedTasks,
    passedTasks,
    addTask,
    ...callbacks
}) {
    return (
        <section className={cl.todo}>
            <Header />
            <TasksForm addTask={addTask} />
            <Tasks {...callbacks} tasks={unpassedTasks} />
            <div className={cl.passTasks}>
                <h2 className={cl.tasksTitle}>Выполненные задачи:</h2>

                <Tasks {...callbacks} tasks={passedTasks} isPassed={true} />
            </div>
        </section>
    );
}
