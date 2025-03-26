import Todo from "./components/Todo/Todo";
import { useCallback, useReducer } from "react";

const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const PASS_TASK = "PASS_TASK";
const UNPASS_TASK = "UNPASS_TASK";

const initialState = {
    tasks: [
        {
            id: 1,
            name: "First Task",
            descr: "Ladno",
            passed: false,
        },
        {
            id: 2,
            name: "First Task",
            descr: "Ladno",
            passed: false,
        },
        {
            id: 3,
            name: "First Task",
            descr: "Ladno",
            passed: false,
        },
        {
            id: 4,
            name: "First Task",
            descr: "Ladno",
            passed: true,
        },
        {
            id: 5,
            name: "First Task",
            descr: "Ladno",
            passed: true,
        },
    ],
};

function reducer(state, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        ...action.task,
                        id: state.tasks[state.tasks.length - 1].id + 1,
                    },
                ],
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id),
            };
        case PASS_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.id ? { ...task, passed: true } : task,
                ),
            };
        case UNPASS_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.id ? { ...task, passed: false } : task,
                ),
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

    return (
        <div className="wrapper">
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
        </div>
    );
}

export default App;
