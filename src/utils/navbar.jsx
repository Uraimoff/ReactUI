import React from "react";
import Component from "../components/Component";
import Buttons from "../components/Component/Buttons";
import Authorization from "../pages/Authorization";
import Blog from "../pages/Blog";
import Guide from "../pages/Guide";
import Home from "../pages/Home";

// const Home = React.lazy(()=>import("./../pages/Home"));

export const navbar = [
  {
    //
    // element: <React.Suspense fallback={<React.Fragment><div><div>Loading...</div></div></React.Fragment>}><Home /></React.Suspense>,
    element: <Home />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
    component: false,
  },
  {
    //
    // element: <React.Suspense fallback={<React.Fragment><div><div>Loading...</div></div></React.Fragment>}><Home /></React.Suspense>,
    element: <Component />,
    title: "Components",
    path: "/component",
    private: false,
    hidden: false,
    component: false,
  },
  {
    // element: <React.Suspense fallback={<React.Fragment><div><div>Loading...</div></div></React.Fragment>}><Home /></React.Suspense>,
    element: <Blog />,
    title: "Blog",
    path: "/blog",
    private: false,
    hidden: false,
    component: false,
  },
  {
    //
    // element: <React.Suspense fallback={<React.Fragment><div><div>Loading...</div></div></React.Fragment>}><Home /></React.Suspense>,
    element: <Guide />,
    title: "Guide",
    path: "/guide",
    private: false,
    hidden: false,
    component: false,
  },
  {
    // element: <React.Suspense fallback={<React.Fragment><div><div>Loading...</div></div></React.Fragment>}><Home /></React.Suspense>,
    element: <Authorization />,
    title: "Authorization",
    path: "/auth",
    private: false,
    hidden: true,
    component: false,
  },
  {
    element: <Buttons/>,
    title: "Buttons",
    path: "/buttons",
    private: false,
    hidden: false,
    component: true,
  },
];

export const componentChildren = [
];
// export {navbar}
