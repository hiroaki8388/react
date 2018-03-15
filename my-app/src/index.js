import React from 'react';
import './index.css';
import { createStore, } from 'redux'
import { render } from 'react-dom'

const initialState = {
    task: "",
    tasks: []
}

const inputTask = (task) => ({
    type: 'INPUT_TASK',
    payload: {
        task
    }

})


const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: {
        task
    }
})

const store = createStore(tasksReducer)

store.dispatch(addTask('Storeを学ぶ'))

function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case 'INPUT_TASK':
            return {
                ...state,
                task: action.payload.task
            }

        case 'ADD_TASK':
            return {
                ...state,
                tasks: state.tasks.concat([action.payload.task])
            }

        default:
            return state
    }
}




function TodoApp({ store }) {
    const { task, tasks } = store.getState()


    return (
        <div>
            <input type="text" onChange={(e) =>
                store.dispatch(inputTask(e.target.value))} />

            <input type="button" value="add" onClick={
                () => store.dispatch(addTask(task))} />
            <ul>
                {
                    tasks.map(function (item, i) {
                        return (
                            <li key={i}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

function renderApp(store) {
    render(
        <TodoApp store={store} />,
        document.getElementById('root')
    )
}

store.subscribe(() => renderApp(store))
renderApp(store)