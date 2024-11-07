import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import './index.css'
import Root from "./pages/index.jsx"
import ErrorPage from "./pages/error-page.jsx"
import APropos from "./pages/a-propos.jsx"
import Logement from "./pages/page-appartement.jsx"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "a-propos",
    element: <APropos />,
    errorElement: <ErrorPage />,
  },
  {
    path: "page-appartement/:id",
    element: <Logement />,
    errorElement: <ErrorPage />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
