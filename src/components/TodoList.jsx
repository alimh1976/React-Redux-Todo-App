import React, { Component } from 'react'
import { connect } from "react-redux"
import { toggleTodo } from '../actions';
import Todo from './Todo';




class TodoList extends Component {

    render() {
        const {todos,toggleClickTodo} = this.props
        //console.log()
        return (
            
                <ul className="d-flex justify-content-center flex-column bg-success w-25 m-auto rounded">
                    {

                        todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => toggleClickTodo(todo.id)} />)


                    }
                </ul>
            
        )
    };

}


const getVisibleTodos=(todos,filter)=>{

    switch(filter){
        case "SHOW-ALL":
        return todos
        case "SHOW-ACTIVE":
        return todos.filter(t => !t.completed);
        case "SHOW-COMPLETED":
        return todos.filter(t => t.completed);
        default: throw new Error('unknown filter: ' + filter);
    }

}


const mapStateToProps = (state) => ({

    todos:getVisibleTodos(state.todos,state.visibilityFilter)

})

const mapDispatchToProps = (dispatch) => {
    return {

        toggleClickTodo: (id) => {
            return dispatch(toggleTodo(id))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)