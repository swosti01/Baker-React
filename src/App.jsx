import { Home, AboutUs, Menu, Cart, Contact, Blog, Error, SignIn} from './pages'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error/>, },
  { path: "aboutus", element: <AboutUs />, errorElement: <Error/>, },
  { path: "menu", element: <Menu />, errorElement: <Error/>, },
  { path: "cart", element: <Cart />, errorElement: <Error/>, },
  { path: "contact", element: <Contact />, errorElement: <Error/>, },
  { path: "signin", element: <SignIn />, errorElement: <Error/>, },
  { path: "blog", element: <Blog />, errorElement: <Error/>, },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App