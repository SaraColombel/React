import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Accueil from './pages/Accueil'
import Blog from './pages/Blog'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Accueil />
  },
  {
    path:'/blog',
    element: <Blog />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
