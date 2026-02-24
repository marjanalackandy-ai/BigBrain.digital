import { createBrowserRouter } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "packages", Component: Packages },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);