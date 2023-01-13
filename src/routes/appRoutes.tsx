import { RouteType } from "./config";
import Home from "../pages/Home";
import PresalePageLayout from "../pages/PresalePageLayout";
import Explore from "../pages/Explore";
import MyContribution from "../pages/MyContribution";
import CreatePreasale from "../pages/CreatePreasale";

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';



const appRoutes: RouteType[] = [
  {
    index: true,
    element: <Home />,
    state: "home",
  },
  //Home
  {
    path:"/",
    element:<Home />,
    state:'home',
    sidebarProps:{
        displayText: "Home",
        icon: <ArticleOutlinedIcon />
    }
  },
  //Presales
  {
    path: "/presales",
    element: <PresalePageLayout />,
    state: "presales",
    sidebarProps: {
      displayText: "Presale",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        path: "/presales/explore",
        element: <Explore />,
        state: "presales.explore",
        sidebarProps: {
          displayText: "Explore"
        },
      },
      {
        path: "/presales/quickview",
        element: <Explore />,
        state: "presales.quickview",
        sidebarProps: {
          displayText: "Quick View"
        },
      },
      {
        path: "/presales/contribution",
        element: <MyContribution />,
        state: "presales.contribution",
        sidebarProps: {
          displayText: "My Contribution"
        }
      },
      {
        path: "/presales/alarm",
        element: <MyContribution />,
        state: "presales.alarm",
        sidebarProps: {
          displayText: "My Alarm"
        }
      },
    ]
  },
  //Launchpad
  
  {
    path: "/launchpad",
    element: <PresalePageLayout />,
    state: "launchpad",
    sidebarProps: {
      displayText: "Launchpad",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        path: "/launchpad/create-presale",
        element: <CreatePreasale />,
        state: "presales.create-presale",
        sidebarProps: {
          displayText: "Create Presale"
        },
      },
    //   {
    //     path: "/presales/quickview",
    //     element: <Explore />,
    //     state: "presales.quickview",
    //     sidebarProps: {
    //       displayText: "Quick View"
    //     },
    //   },
    //   {
    //     path: "/presales/contribution",
    //     element: <MyContribution />,
    //     state: "presales.contribution",
    //     sidebarProps: {
    //       displayText: "My Contribution"
    //     }
    //   },
    //   {
    //     path: "/presales/alarm",
    //     element: <MyContribution />,
    //     state: "presales.alarm",
    //     sidebarProps: {
    //       displayText: "My Alarm"
    //     }
    //   },
    ]
  },

];

export default appRoutes;
