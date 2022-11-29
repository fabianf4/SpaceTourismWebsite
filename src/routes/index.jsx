import { createBrowserRouter , createHashRouter } from "react-router-dom"
import App from "../App"
import Index from "../pages/index"
import Destination from "../pages/destination"
import Error from "../pages/error"

export const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Index />
            },
            {
                path: "/destination",
                element: <Destination />
            }
        ]
    }
])
