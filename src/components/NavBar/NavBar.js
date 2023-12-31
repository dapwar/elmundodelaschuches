import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return(
        <nav>

            <h3>El Mundo de las Chuches</h3>
            <div>
                <button>Productos</button>
                <button>Quienes Somos</button>
                <button>Contactanos</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar