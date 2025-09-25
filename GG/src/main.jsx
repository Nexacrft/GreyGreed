import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Pages/Home.jsx'
import Work from './Pages/Work.jsx'
import Service from './Our Services/Section1.jsx'
import Whygg from './Pages/Whygg.jsx'
import Contact from './Pages/Contact.jsx'
import App from './App.jsx'
import Section1 from './OurworkPages/Section1.jsx'  // 👈 import Section1 for Work child
import Section2 from './OurworkPages/Section2.jsx'  // 👈 import Section1 for Work child
import Section3 from './OurworkPages/Section3.jsx'  // 👈 import Section1 for Work child
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/service",
        element: <Service />
      },
      {
        path: "/whygg",
        element: <Whygg />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
