import { createBrowserRouter } from "react-router-dom";
import * as uiScreens from "../ui/Screens/index";

export const router = createBrowserRouter([
  
    {
        path: "/",
        element: <uiScreens.Home />
    },
    {
        path: "/FindPlayer",
        element: <uiScreens.Home />,
    }
]);