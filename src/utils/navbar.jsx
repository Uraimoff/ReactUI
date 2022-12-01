import React from "react";
import Authorization from "../pages/Authorization";
import Home from "../pages/Home";

// const Home = React.lazy(()=>import("./../pages/Home"));


export const navbar =[
    {
        // 
        // element: <React.Suspense fallback={<React.Fragment><div><div>Loading...</div></div></React.Fragment>}><Home /></React.Suspense>,
        element: <Home/>,
        title: "Home",
        path: "/home",
        private: false,
        hidden: false,
      },
    {
        // element: <React.Suspense fallback={<React.Fragment><div><div>Loading...</div></div></React.Fragment>}><Home /></React.Suspense>,
        element: <Authorization/>,
        title: "Authorization",
        path: "/auth",
        private: false,
        hidden: false,
      },
] 
// export {navbar} 