import React from "react";
import AllComponent from "../components/Component/AllMap";
import Buttons from "../components/Component/Buttons";
import ChatGpt from "../components/Component/ChatGpt";
import Dropdown from "../components/Component/Dropdown";
import Inputs from "../components/Component/Inputs";
import MusicPlayer from "../components/Component/MusicPlayer";
import Parallax from "../components/Component/Parallax";
import Sidebar from "../components/Component/SideBar";
import VideoPlayer from "../components/Component/VideoPlayer";
import Authorization from "../pages/Authorization";
import Blog from "../pages/Blog";
import Components from "../pages/Components";
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
    element: <Components />,
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
  {
    element: <Inputs/>,
    title: "Inputs",
    path: "/inputs",
    private: false,
    hidden: false,
    component: true,
  },
  {
    element: <AllComponent/>,
    title: "Yandex Maps",
    path: "/map",
    private: false,
    hidden: false,
    component: true,
  },
  {
    element: <Dropdown/>,
    title: "Dropdowns",
    path: "/dropdown",
    private: false,
    hidden: false,
    component: true,
  },
  {
    element: <MusicPlayer/>,
    title: "Music players",
    path: "/music-player",
    private: false,
    hidden: false,
    component: true,
  },
  {
    element: <VideoPlayer/>,
    title: "Video players",
    path: "/video-player",
    private: false,
    hidden: false,
    component: true,
  },
  {
    element: <Parallax/>,
    title: "Parallax parts",
    path: "/parallax",
    private: false,
    hidden: false,
    component: true,
  },
  {
    element: <Sidebar/>,
    title: "Sidebars",
    path: "/sidebar",
    private: false,
    hidden: false,
    component: true,
  },
  {
    element: <ChatGpt/>,
    title: "ChatGPT",
    path: "/chatgpt",
    private: false,
    hidden: false,
    component: true,
  },
  {
    element: <Dropdown/>,
    title: "1Dropdown",
    path: "/dropdown",
    private: false,
    hidden: false,
    component: true,
  },
];

export const componentChildren = [
];
// export {navbar}
