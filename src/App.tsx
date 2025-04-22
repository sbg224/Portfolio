import { Outlet } from "react-router-dom";
import "./App.css";
import { ShowProvider } from "./context/ShowModeContext";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";
import BackgroundText from "./components/BackgroundText";

function App() {

	return (
		<>
			<ThemeProvider>
				<ShowProvider>
					<BackgroundText />
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
