import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import axios from "axios";
import "./index.css";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import Skils from "./pages/Skils.tsx";
import About from "./pages/About.tsx";

// const getData = async (LinkUrl : string) => {
// 	const result = await axios.get(LinkUrl)
// 	return result.data
// }

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
				// loader: () => getData(" ")
			},

			{
				path: "/skils",
				element: <Skils />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement !== null) {
	createRoot(rootElement).render(<RouterProvider router={router} />);
}
