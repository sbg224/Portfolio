import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import Skils from "./pages/Skils.tsx";
import About from "./pages/About.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
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
