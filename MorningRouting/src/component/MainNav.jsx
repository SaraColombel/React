import {NavLink} from 'react-router-dom'

function MainNav(){
    return <nav>
        <NavLink to={'/'}>Accueil </NavLink>
        <NavLink to={'/blog'}>Blog</NavLink>
    </nav>
}

export default MainNav