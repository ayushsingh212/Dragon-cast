import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './My Components/Layout/Layout.jsx'
import Home from './My Components/Home/Home.jsx'
import About from './My Components/About/About.jsx'
import Chapter from './My Components/Chap 1/Chapter.jsx'
import Chapters from './My Components/Chapters/Chapters.jsx'

import Login from './My Components/Login/Login.jsx'
import { UserContextProvider } from './My Components/Context/UseContext.jsx'
import SorryUpcom from './My Components/UpcomingChapter/SorryUpcom.jsx'
import ContactPage from './My Components/Contact/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Layout />}   >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='chapters' element={<Chapters />}/>
    
      <Route path='chap/:chapId' element={<Chapter/>} />
      
      <Route path='login' element ={<Login/>}/>
      <Route path="coming-soon" element={<SorryUpcom/>} />
      <Route path='contact'element ={<ContactPage/>} />

    
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider >
    <RouterProvider router={router}  basename = "/Dragon-cast/" />
    </UserContextProvider>
  </StrictMode>
)
