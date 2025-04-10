import { Outlet } from "react-router-dom";
import "./App.css";
import { ShowProvider } from "./context/ShowModeContext";
import Footer from "./components/Footer";

function App() {

	return (
		<>
			<ShowProvider>
				<main>
					<Outlet />
				</main>
				<Footer />
			</ShowProvider>
			
		</>
	);
}

export default App;
