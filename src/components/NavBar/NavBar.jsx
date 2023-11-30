import cart from './assets/logo.png';
import CartWidget from '../CardWidget/CartWidget';
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <link to='/'>
                <img className="logo" src={cart} />
            </link>
            <div className="anclas">
                <NavLink to={'/category/1'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>1</NavLink>
                <NavLink to={'/category/2'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>2</NavLink>
            </div>
            <div class="carro">
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar