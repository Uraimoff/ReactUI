import React from "react";
import AllComponent from "../components/Component/AllMap";
import Buttons from "../components/Component/Buttons";
import ChatGpt from "../components/Component/ChatGpt";
import Logins from "../components/Component/Logins";
import Dropdown from "../components/Component/Dropdown";
import Inputs from "../components/Component/Inputs";
import MusicPlayer from "../components/Component/MusicPlayer";
import Parallax from "../components/Component/Parallax";
import Sidebar from "../components/Component/SideBar";
import VideoPlayer from "../components/Component/VideoPlayer";
import PaginationPage from "../components/Component/PaginationPage";
import Authorization from "../pages/Authorization";
import Blog from "../pages/Blog";
import Components from "../pages/Components";
import Guide from "../pages/Guide";
import Home from "../pages/Home";

// const Home = React.lazy(()=>import("./../pages/Home"));
export const lang=[
  {
    code: 'en',
    language: "English"
  },
  {
    code: 'ru',
    language: "Русский"
  },
  {
    code: 'uz',
    language: "O'zbekcha"
  },
]
export const navbar = [
  {
    //
    // element: <React.Suspense fallback={<React.Fragment><div><div>Loading...</div></div></React.Fragment>}><Home /></React.Suspense>,
    element: <Home />,
    title: "Home",
    titleru: "Главный",
    titleuz: "Asosiy",
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
    titleru: "Компоненты",
    titleuz: "Komponentlar",
    path: "/component",
    private: false,
    hidden: false,
    component: false,
  },
  {
    // element: <React.Suspense fallback={<React.Fragment><div><div>Loading...</div></div></React.Fragment>}><Home /></React.Suspense>,
    element: <Blog />,
    title: "Blog",
    titleru: "Блог",
    titleuz: "Blog",
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
    titleru: "Руководство",
    titleuz: "Qo'llanma",
    path: "/guide",
    private: false,
    hidden: false,
    component: false,
  },
  {
    // element: <React.Suspense fallback={<React.Fragment><div><div>Loading...</div></div></React.Fragment>}><Home /></React.Suspense>,
    element: <Authorization />,
    title: "Authorization",
    titleru: "Авторизация",
    titleuz: "Avtorizatsiya",
    path: "/auth",
    private: false,
    hidden: true,
    component: false,
  },
  {
    element: <Buttons/>,
    title: "Buttons",
    titleru: "Buttons",
    titleuz: "Buttons",
    path: "/buttons",
    private: false,
    hidden: false,
    component: true,
  },
  {
    element: <Inputs/>,
    title: "Inputs",
    titleru: "Inputs",
    titleuz: "Inputs",
    path: "/inputs",
    private: false,
    hidden: false,
    component: true,
  },
  {
    element: <AllComponent/>,
    title: "Yandex Maps",
    titleru: "Яндекс карты",
    titleuz: "Yandex xaritalar",
    path: "/map",
    private: false,
    hidden: false,
    component: true,
  },
  {
    element: <Dropdown/>,
    title: "Dropdowns",
    titleru: "Dropdowns",
    titleuz: "Dropdowns",
    path: "/dropdown",
    private: false,
    hidden: false,
    component: true,
  },
  {
    element: <MusicPlayer/>,
    title: "Music players",
    titleru: "Музыкальные плееры",
    titleuz: "Musiqa pleyerlari",
    path: "/music-player",
    private: false,
    hidden: false,
    component: true,
  },
  {
    element: <VideoPlayer/>,
    title: "Video players",
    titleru: "Видеоплееры",
    titleuz: "Videopleyer",
    path: "/video-player",
    private: false,
    hidden: false,
    component: true,
  },
  {
    element: <Parallax/>,
    title: "Parallax parts",
    titleru: "Параллаксные детали",
    titleuz: "Paralaks qismlar",
    path: "/parallax",
    private: false,
    hidden: false,
    component: true,
  },
  {
    element: <Sidebar/>,
    title: "Sidebars",
    titleru: "Боковые панели",
    titleuz: "Yon oynalar",
    path: "/sidebar",
    private: false,
    hidden: false,
    component: true,
  },
  {
    element: <PaginationPage/>,
    title: "Pagination",
    titleru: "Pagination",
    titleuz: "Pagination",
    path: "/pagination",
    private: false,
    hidden: false,
    component: true,
  },
  {
    element: <ChatGpt/>,
    title: "ChatGPT",
    titleru: "ChatGPT",
    titleuz: "ChatGPT",
    path: "/chatgpt",
    private: false,
    hidden: false,
    component: true,
  },
  {
    element: <Logins/>,
    title: "Logins",
    titleru: "Логины",
    titleuz: "Ro'yxatda o'tish qismlari",
    path: "/logins",
    private: false,
    hidden: false,
    component: true,
  },
];

export const componentChildren = [
];
// export {navbar}
