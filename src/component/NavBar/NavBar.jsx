
import './NavBar.css';  

import logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='NavBar'>
            <img className='logo' src={logo} alt="" />
            <div className='links'>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                
            </div>
        
        </div>
    );
};

export default NavBar;