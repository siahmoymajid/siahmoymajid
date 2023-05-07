import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';
import {
  createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <Home />,
    errorElement: <ErrorPage />
  }
]);

