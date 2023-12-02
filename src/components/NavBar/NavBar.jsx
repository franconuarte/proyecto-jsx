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
                <NavLink to={'/category/:categoryId'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>1</NavLink>
                <NavLink to={'./Item'} className="Nav">2</NavLink>
                {/* {({ isActive }) => isActive ? 'ActiveOption' : 'Option'} */}
            </div>
            <div className="carro">
                <CartWidget />
            </div>
        </nav>

    )
}

export default NavBar