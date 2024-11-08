import {NavLink, Outlet} from 'react-router-dom'

function Portfolio(){
    return<>
        <h1>Portfolio</h1>
        <NavLink to={'/portfolio/calendar'}>Calendar </NavLink>
        <NavLink to={'/portfolio/carduser'}>CardUser </NavLink>
        <NavLink to={'/portfolio/todolist'}>ToDoList </NavLink>

        <Outlet />
    </>
}

export default Portfolio