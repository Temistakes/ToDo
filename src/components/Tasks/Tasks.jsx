import React from "react";
import Task from "../Task/Task";
import "./Tasks.scss";

export default function Tasks({ tasks, className, ...callbacks }) {
    return (
        <div className={`todo__tasks ${className}`}>
            {tasks?.map(({ name, descr, id, passed }) => (
                <Task
                    {...callbacks}
                    name={name}
                    descr={descr}
                    key={id}
                    id={id}
                    passed={passed}
                />
            ))}
        </div>
    );
}
