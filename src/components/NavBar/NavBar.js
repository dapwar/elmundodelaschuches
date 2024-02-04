import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="NavBar">
            <Link to='/'>
              <h3 style={{ color:'Fuchsia'}}>El Mundo de las Chuches</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/Productos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} style={{background:'ligh blue'}}>Productos</NavLink>
                <NavLink to={`/category/Quienes Somos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} style={{background:'ligh blue'}}>Quienes Somos</NavLink>
                <NavLink to={`/category/Contactanos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} style={{background:'ligh blue'}}>Contactanos</NavLink>       
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar