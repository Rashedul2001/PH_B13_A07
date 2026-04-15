import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Router from './routes/route'
import { ToastContainer } from 'react-toastify'
import DataContext from './context/DataContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <DataContext>
      <RouterProvider router={Router} />
    </DataContext>

  </StrictMode>,
)
