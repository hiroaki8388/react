import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'

const initialState = {
    task:"",
    tasks: []
}

const inputTask=(task)=>({
    type: 'INPUT_TASK',
    payload:{
        task
    }

})


const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: {
        task
    }
})

const store=createStore(tasksReducer)

store.dispatch(addTask('Storeを学ぶ'))

function tasksReducer(state=initialState,action){
    switch(actiion.type){
        case 'INPUT_TASK':
        return{
            ...state,
            task:actiion.payload.task
        }

        case 'ADD_TASK':
        return{
            ...state,
            tasks:state.tasks.concat([action.payload.task])
        }

        default:
        return state
    }
}

// この波括弧何?
function TodoApp({store}){
const {task,tasks}=store.getState()


return(
    <div>
        <input type="text" onChange={(e)=>
    store.dispatch(inputTask(e.target.value)) }/>

    <input type="button" value="add" onClick={
        ()=>store.dispatch(addTask(task))}/>

</div>
)
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
