
import './NavBar.css';  

import logo from '../../assets/images/Logo.svg'
const NavBar = () => {
    return (
        <div className='NavBar'>
            <img className='logo' src={logo} alt="" />
            <div>
                <a href=""><span href="1">Order</span></a>
                <a href="">Order Preview</a>
                <a href="">Manage Inventory</a>
                <a href="">Login</a>
                
            </div>
            
        </div>
    );
};

export default NavBar;