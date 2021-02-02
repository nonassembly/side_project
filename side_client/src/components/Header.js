import {Component} from 'react';
import Menu from './Menu';
import "../App.css"

const menuItems=[
    "Home",
    "Chapters",
    "About",
    "Book"
];

class Header extends Component{
    constructor(props){
        super(props);
        this.state={active: props.active};
    }
    _handleClick(menuItem)
    {
        this.setState({active: menuItem})
    }

    render(){
        return(
            <>
            <ul className="ul">
            {
                menuItems.map(menuItem=>
                <Menu name={menuItem}
                selected={this.state.active===menuItem ? "selected" : "unselected"}
                clicked={this._handleClick.bind(this)}
                >
                    {menuItem}
                </Menu>
                )}
            </ul>
            </>
        )
    }
}

export default Header;