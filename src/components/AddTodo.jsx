import React, { Component } from 'react';
import { connect } from "react-redux"
import { addTodo } from '../actions/index'


class AddTodo extends Component {


    formSubmit(e) {

        e.preventDefault();
        if(this.refs.inputValue.value){
            
            this.props.dispatch(addTodo(this.refs.inputValue.value));
            this.refs.inputValue.value = "";
        }
        else{
            return false
        }




    }
    render() {
        return (
            <div>
                <h1 className="jumbotron text-center">Simple Todo App With React.js and Redux</h1>
                <form onSubmit={this.formSubmit.bind(this)} className="d-flex justify-content-center">
                    <input type="text" ref="inputValue" className="form-conrtrol-lg m-3" />
                    <button type="submit" className="btn btn-primary btn-sm m-0" >add item</button>
                </form>
            </div>
        );
    }
}
export default connect()(AddTodo);