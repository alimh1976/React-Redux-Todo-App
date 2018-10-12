import React ,{Component} from 'react'
import FilterLink from './FilterLink'

class Footer extends Component{

    render(){
        return(
            <p className="d-flex justify-content-center">
                <FilterLink filter="SHOW-ALL">
                    all
                </FilterLink>
                {' '}
                
                <FilterLink filter="SHOW-ACTIVE">
                    active
                </FilterLink>
                {" "}
                
                <FilterLink filter="SHOW-COMPLETED">
                    completed
                </FilterLink>
                {" "}
            </p>
        )
    }

}


export default Footer;