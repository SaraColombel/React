import './App.css'
import { createBrowserRouter, Outlet, NavLink, RouterProvider} from 'react-router-dom'
import Accueil from './pages/Accueil'
import Calendar from './pages/Calendar'
import Contact from './pages/Contact'
import PageError from './pages/PageError'
import Portfolio from './pages/Portfolio'
import ToDoList from './pages/ToDoList'
import CardUser from './pages/CardUser'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: '',
        element: <Accueil />
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
        children: [
          {
            path: '/portfolio/calendar',
            element: <Calendar />
          },
          {
            path: '/portfolio/carduser',
            element: <CardUser />
          },
          {
            path: '/portfolio/todolist',
            element: <ToDoList />
          }
        ]
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

function Root() {
  return <>
    <header className="navBar">
      <h1 className="titreNavBar">Mon Portfolio</h1>
      <NavLink className="NavLink" to={''}>Accueil </NavLink>
      <NavLink className="NavLink" to={'/portfolio'}>Portfolio </NavLink>
      <NavLink className="NavLink" to={'/contact'}>Contact </NavLink>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>

    </footer>
  </>
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
