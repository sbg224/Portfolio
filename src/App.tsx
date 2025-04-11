import { Outlet } from "react-router-dom";
import "./App.css";
import { ShowProvider } from "./context/ShowModeContext";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";

function App() {

	return (
		<>
			<ThemeProvider>
				<ShowProvider>
					<main>
						<Outlet />
					</main>
					<Footer />
				</ShowProvider>
			</ThemeProvider>
			
		</>
	);
}

export default App;
