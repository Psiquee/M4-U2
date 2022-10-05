//import { Link } from "react-router-dom";
import '../../styles/layout.css';
import { NavLink } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';


const Nav = (props) => {
    return (
        <nav>
            <div class="botonera">
            <img src="https://via.placeholder.com/50x50" alt="LOGO" class="nav-brand"/>
                <ul class="menu">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo": undefined }>Home</NavLink></li>
                    <li><NavLink to="/historia" className={({ isActive }) => isActive ? "activo": undefined }>Historia</NavLink></li>
                    <li><NavLink to="/videos" className={({ isActive }) => isActive ? "activo": undefined }>Videos</NavLink></li>
                    <li><NavLink to="/galeria" className={({ isActive }) => isActive ? "activo": undefined }>Galeria</NavLink></li>
                    <li><NavLink to="/novedades" className={({ isActive }) => isActive ? "activo": undefined }>Novedades</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo": undefined }>Contacto</NavLink></li>
                </ul>
                <ul>
          <li>
            <button onClick={click}> <i class="fas fa-search"></i>
            </button>
          </li>
        </ul>
        <hr></hr>
        <hr></hr>

            </div>
        </nav>
    );
}
export default Nav;