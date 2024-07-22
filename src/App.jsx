import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import AppLayout from './Layouts/AppLayout'
import { Home, About, Blog } from './Pages'
import { useTheme } from './Context/ThemeContext'

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog />} />
    </Route>
  )
)

const App = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    // dont forget to configure in tailawind.config.js
    const htmlTag = document.querySelector("html");
    htmlTag.classList.remove("dark", "light");

    if (isDarkMode) {
      htmlTag.classList.add("dark");
    } else {
      htmlTag.classList.add("light");

    }
  }, [isDarkMode])

  return (
      <RouterProvider router={appRouter} />
  )

}

export default App