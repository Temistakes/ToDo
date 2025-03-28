import React, { useCallback } from "react";
import IconButton from "../utils/IconButton/IconButton";
import cl from "./Task.module.css";
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
    ref,
    ...props
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
            className={cls(cl.task, {
                [cl.task_passed]: passed,
            })}
            onClick={handleClick}
            ref={ref}
        >
            <div className={cl.wrap}>
                <div className={cl.label}></div>

                <div className={cl.text}>
                    <span className={cl.name}>{name}</span>
                    <p className={cl.descr}>{descr}</p>
                </div>
            </div>

            <IconButton
                className={cl.iconBtn}
                onClick={() => deleteTask(id)}
                icon={faTrash}
            />
        </div>
    );
}
