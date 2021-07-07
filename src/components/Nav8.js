import './css/Nav8.css'
import { NavLink } from 'react-router-dom';
import { r_home, r_login, r_publics, r_signup } from '../routes';

function Nav8({}) {
    
    return(
        <nav>
            <NavLink activeClassName="active" to={r_home}>Home</NavLink>
            <NavLink activeClassName="active" to={r_publics}>New Post</NavLink>
            <NavLink activeClassName="active" to={'/mapita'}>Mapita</NavLink>
            <NavLink activeClassName="active" to={'/formulario'}>Formulario</NavLink>
            <NavLink activeClassName="active" to={r_login}>Log In</NavLink>
            <NavLink activeClassName="active" to={r_signup}>Registro</NavLink>
        </nav>
    );
}

export default Nav8