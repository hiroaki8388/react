import { connect } from 'react-redux'
import TodoApp from '../components/TodoApp'
import { inputTask, addTask } from '../actions/tasks'


// storeにあるstateをPropsに渡す
function mapStateToProps({ task, tasks }) {
    return {
        task,
        tasks
    }
}

// 該当のactionをDispatchさせる関数をPropsに渡す
function mapDispatchToProps(dispatch) {
    return {
        // addTaskという関数をComponetに渡す
        addTask(task) {
            dispatch(addTask(task))
        },
        inputTask(task) {
            dispatch(inputTask(task))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
