import React from 'react';
import { createStore } from 'redux'
import { render } from 'react-dom'
import TodoApp from './containers/TodoApp'
import tasksReducer from './reducers/tasks'
import { Provider } from 'react-redux'

const store = createStore(tasksReducer)


render(
    <Provider store={store} >
        <TodoApp />
    </Provider>,
    document.getElementById('root')
)

