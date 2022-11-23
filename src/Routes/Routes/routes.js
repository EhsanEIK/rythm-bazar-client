import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

        ]
    }
])

export default router;