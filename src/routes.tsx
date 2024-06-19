import { createBrowserRouter } from "react-router-dom";
import { Basket } from "./pages/Basket";
import { Home } from "./pages/Home";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/basket",
		element: <Basket />,
	},
]);
