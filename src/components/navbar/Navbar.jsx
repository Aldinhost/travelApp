import {Component} from 'react';
import {Link} from 'react-router-dom';
import { FaBars,FaTimes } from "react-icons/fa";
import { MenuItems } from './menuItems/MenuItems';
import './navbar.css';

class Navbar extends Component {
    state = {clicked: false}
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'><a href="/">Traveling</a></h1>
                
                <div className='menu-icons' onClick={this.handleClick}>
                   {this.state.clicked ? <FaTimes/> : <FaBars/>} 
                    
                </div>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>{item.title}</Link>
                            </li>
                        )
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}


export default Navbar;