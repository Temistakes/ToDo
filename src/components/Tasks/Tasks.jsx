import React from "react";
import Task from "../Task/Task";
import cl from "./Tasks.module.css";
import cls from "classnames";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function Tasks({ tasks, className, isPassed, ...callbacks }) {
    return (
        <TransitionGroup
            className={cls(cl.tasks, {
                [cl.tasks_passed]: isPassed,
            })}
        >
            {tasks?.map(({ name, descr, id, passed, nodeRef }) => (
                <CSSTransition
                    key={id}
                    timeout="500"
                    classNames={{
                        enter: cl.enter,
                        enterActive: cl.enterActive,
                        enterDone: cl.enterDone,
                        exit: cl.exit,
                        exitActive: cl.exitActive,
                        exitDone: cl.exitDone,
                    }}
                    nodeRef={nodeRef}
                    unmountOnExit
                    addEndListener={done =>
                        nodeRef.current.addEventListener("transitionend", done)
                    }
                >
                    <Task
                        {...callbacks}
                        name={name}
                        descr={descr}
                        id={id}
                        passed={passed}
                        ref={nodeRef}
                    />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
}
