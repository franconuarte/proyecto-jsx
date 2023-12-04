import cart from './assets/logo.png';
import CartWidget from '../CardWidget/CartWidget';
import './NavBar.css';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (

        <nav className="navbar">

            <img className="logo" src={cart} />

            <div className="anclas">
                <NavLink to={'/'} className="Nav">Ver Productos</NavLink>
                <NavLink to={'/category/maquillaje'} className="Nav">Maquillaje</NavLink>
                <NavLink to={'/category/accesorios'} className="Nav">Accesorios</NavLink>
                <NavLink to={'/category/uñas'} className="Nav">Uñas</NavLink>
            </div>
            <div className="carro">
                <CartWidget />
            </div>
        </nav>

    )
}

export default NavBar
