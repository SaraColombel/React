import './App.css'
import { createBrowserRouter, Outlet, NavLink, RouterProvider} from 'react-router-dom'
import Accueil from './pages/Accueil'
import Calendar from './pages/Calendar'
import CardUser from './pages/CardUser'
import Contact from './pages/Contact'
import PageError from './pages/PageError'
import Portfolio from './pages/Portfolio'
import ToDoList from './pages/ToDoList'

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
    <header>
      <h1>Mon Portfolio</h1>
      <NavLink to={''}>Accueil </NavLink>
      <NavLink to={'/portfolio'}>Portfolio </NavLink>
      <NavLink to={'/contact'}>Contact </NavLink>
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
