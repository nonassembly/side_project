import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Category extends Component{
    render(){
        return(
            <>
            <Link to={this.props.name}>{this.props.name}</Link>
            </>
        )
    }
}

export default Category;