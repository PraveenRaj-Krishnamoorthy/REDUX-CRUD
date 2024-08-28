import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./Components/Home"
import { Create } from "./Components/Create"
import { Updated } from "./Components/Updated"
import { Deleted } from "./Components/Deleted"

export const App = () => {
  const routing = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/create", element: <Create /> },
    { path: "/edit/:id", element: <Create /> },
    { path: "/updated", element: <Updated /> },
    { path: "/deleted", element: <Deleted /> },
  ])
  return (
    <>
      <RouterProvider router={routing} />
    </>
  )
}