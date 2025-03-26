import React, { useCallback } from "react";
import IconButton from "../utils/IconButton/IconButton";
import "./Task.scss";
import cls from "classnames";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Task({
    name,
    descr,
    id,
    passed,
    deleteTask,
    passTask,
    unpassTask,
}) {
    const handleClick = useCallback(
        e => {
            if (passed) {
                unpassTask(id);
            } else {
                passTask(id);
            }
            e.stopPropagation();
        },
        [id, passed, passTask, unpassTask],
    );

    return (
        <div
            className={cls("task", {
                task_passed: passed,
            })}
            onClick={handleClick}
        >
            <div className="task__wrap">
                {/* <input type="checkbox" id={id} hidden className="task__input" /> */}
                <div className="task__label"></div>

                <div className="task__text">
                    <span className="task__name">{name}</span>
                    <p className="task__descr">{descr}</p>
                </div>
            </div>

            <IconButton onClick={() => deleteTask(id)} icon={faTrash} />
        </div>
    );
}
