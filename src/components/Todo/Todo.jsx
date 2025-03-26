import React, { useReducer } from "react";
import Tasks from "../Tasks/Tasks";
import TasksForm from "../TasksForm/TasksForm";
import Header from "../Header/Header";
import "./Todo.scss";

export default function Todo({
    unpassedTasks,
    passedTasks,
    addTask,
    ...callbacks
}) {
    return (
        <section className="todo">
            <Header />
            <TasksForm addTask={addTask} />
            <Tasks {...callbacks} tasks={unpassedTasks} />
            <div className="todo__pass-tasks">
                <h2 className="todo__tasks-title">Itens já comprados</h2>

                <Tasks
                    {...callbacks}
                    tasks={passedTasks}
                    className={"todo__tasks_passed"}
                />
            </div>
        </section>
    );
}
