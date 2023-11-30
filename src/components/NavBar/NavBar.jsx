import cart from './assets/logo.png';
import CartWidget from '../CardWidget/CartWidget';
import estilos from './NavBar.css';
import { NavLink, link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav class="navbar">
            <link to='/'>
                <img class="logo" src={cart} />
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