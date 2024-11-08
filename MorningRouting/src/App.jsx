import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Blog from './pages/Blog'
import PageError from './pages/PageError'
import MainNav from './component/MainNav'

const router = createBrowserRouter([
  {
    path: '/',
    // Composant 'Root' ou 'Template' remplace parent
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: '',
        element: <Accueil />,
        errorElement: <PageError />,
      },
      {
        path: '/blog',
        element: <Blog />,
        errorElement: <PageError />
      }
    ]
  },
])

function Root() {
  return <>
    <header>
      <MainNav />
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
