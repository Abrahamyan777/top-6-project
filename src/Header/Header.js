import { NavLink } from 'react-router-dom';
import css from './Header.module.css'


function Header() {
    return(
        <div className={css.headerContener}>
            <NavLink to="home" >Home</NavLink>   
            <NavLink to="blog" >Blog</NavLink>   
            <NavLink to="about" >About</NavLink>   
            <NavLink to="counter" >Counter</NavLink>   
            <NavLink to="modal" >Modal</NavLink>   
            <NavLink to="quiz" >Quiz</NavLink>   
            <NavLink to="users" >Users</NavLink>   
        </div>
    )
}

export default Header;