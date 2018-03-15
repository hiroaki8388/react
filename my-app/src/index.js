import React from 'react';
import './index.css';
import { createStore, } from 'redux'
import { render } from 'react-dom'
import TodoApp from './components/TodoApp'
import tasksReducer from './reducers/tasks'

const store = createStore(tasksReducer)

function renderApp(store) {
    render(
        <TodoApp store={store} />,
        document.getElementById('root')
    )
}

store.subscribe(() => renderApp(store))
renderApp(store)