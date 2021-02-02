import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import "../App.css";

class Menu extends Component{
    render(){
        return(
            <>
            <Link className={this.props.selected}
            to={this.props.name}>{this.props.name}</Link>
            </>
        )
    }
}

export default Menu;