import React, { Component } from 'react';
import { connect } from "react-redux"
import { setVisibilityFilter } from './../actions'
class FilterLink extends Component {

    // constructor(){
    //     super();
    //     this.onClick=this.onClick.bind(this)
    // }


    onclick(e) {
        e.preventDefault();
        this.props.onSTR();
    }

    render() {
        console.log(this.props)
        const { children} = this.props
        return (
            <a href="#.html" onClick={this.onclick.bind(this)} className="m-2">
                {children}
            </a>
        );
    }
}


const mapDispatchToProps = (dispatch, footerProps) => {


    return {
        onSTR: () => {
            return dispatch(setVisibilityFilter(footerProps.filter))
        }
    }


}

export default connect(null, mapDispatchToProps)(FilterLink);