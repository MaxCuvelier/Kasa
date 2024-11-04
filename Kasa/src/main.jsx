import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import './index.css'
import Root from "./routes/index.jsx"
import ErrorPage from "./error-page.jsx"
import APropos from "./routes/a-propos.jsx"
import Logement from "./routes/page-appartement.jsx"



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
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
