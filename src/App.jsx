import Todo from "./components/Todo/Todo";
import { createRef, useCallback, useReducer } from "react";
import IconButton from "./components/utils/IconButton/IconButton";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import cls from "classnames";

const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const PASS_TASK = "PASS_TASK";
const UNPASS_TASK = "UNPASS_TASK";
const SET_THEME = "SET_THEME";

const initialState = {
    theme: "light",
    tasks: [
        {
            id: 1,
            name: "First Task",
            descr: "Ladno",
            passed: false,
            nodeRef: createRef(),
        },
        {
            id: 2,
            name: "First Task",
            descr: "Ladno",
            passed: true,
            nodeRef: createRef(),
        },
    ],
};

function reducer(state, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [
                    {
                        ...action.task,
                        id: Date.now(),
                        nodeRef: createRef(),
                    },
                    ...state.tasks,
                ],
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id),
            };
        case PASS_TASK:
            let passTask = state.tasks.find(task => task.id === action.id);
            let passArr = state.tasks.filter(task => task.id !== action.id);

            return {
                ...state,
                tasks: passTask
                    ? [
                          { ...passTask, passed: true, nodeRef: createRef() },
                          ...passArr,
                      ]
                    : passArr,
            };
        case UNPASS_TASK:
            let unpassTask = state.tasks.find(task => task.id === action.id);
            let unpassArr = state.tasks.filter(task => task.id !== action.id);

            return {
                ...state,
                tasks: unpassTask
                    ? [
                          {
                              ...unpassTask,
                              passed: false,
                              nodeRef: createRef(),
                          },
                          ...unpassArr,
                      ]
                    : unpassArr,
            };
        case SET_THEME:
            return {
                ...state,
                theme: action.val,
            };
        default:
            return state;
    }
}

const addTaskAc = (name, descr) => ({
    type: ADD_TASK,
    task: {
        name,
        descr,
        passed: false,
    },
});

const deleteTaskAc = id => ({
    type: DELETE_TASK,
    id,
});

const passTaskAc = id => ({
    type: PASS_TASK,
    id,
});

const unpassTaskAc = id => ({
    type: UNPASS_TASK,
    id,
});

const setThemeAc = val => ({
    type: SET_THEME,
    val,
});

// Component

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const unpassedTasks = state.tasks.filter(task => !task.passed);
    const passedTasks = state.tasks.filter(task => task.passed);

    // Callbacks

    const addTask = useCallback((name, descr) => {
        dispatch(addTaskAc(name, descr));
    }, []);

    const deleteTask = useCallback(id => {
        dispatch(deleteTaskAc(id));
    }, []);

    const passTask = useCallback(id => {
        dispatch(passTaskAc(id));
    }, []);

    const unpassTask = useCallback(id => {
        dispatch(unpassTaskAc(id));
    }, []);

    const setTheme = useCallback(val => {
        dispatch(setThemeAc(val));
    }, []);

    return (
        <div
            className={cls("wrapper", {
                dark: state.theme === "dark",
            })}
        >
            <main className="main">
                <div className="container">
                    <Todo
                        unpassedTasks={unpassedTasks}
                        passedTasks={passedTasks}
                        addTask={addTask}
                        deleteTask={deleteTask}
                        passTask={passTask}
                        unpassTask={unpassTask}
                    />
                </div>
            </main>
            {state.theme === "light" ? (
                <IconButton
                    icon={faMoon}
                    className="themeBtn"
                    onClick={() => setTheme("dark")}
                />
            ) : (
                <IconButton
                    icon={faSun}
                    className="themeBtn"
                    onClick={() => setTheme("light")}
                />
            )}
        </div>
    );
}

export default App;
