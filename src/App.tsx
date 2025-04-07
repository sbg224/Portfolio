import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { ShowProvider } from "./context/ShowModeContext";

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
