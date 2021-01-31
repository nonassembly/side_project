import {Component} from 'react';
import Category from './Category';

class Header extends Component{
    render(){
        return(
            <>
            <Category name="Home"></Category>
            <Category name="Chapters"></Category>
            <Category name="About"></Category>
            <Category name="Book"></Category>
            </>
        )
    }
}

export default Header;