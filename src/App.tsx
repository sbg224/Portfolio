import { Outlet } from "react-router-dom";
import "./App.css";
import { ShowProvider } from "./context/ShowModeContext";

function App() {

	return (
		<>
			<ShowProvider>
				<main>
					<Outlet />
				</main>
			</ShowProvider>
			
		</>
	);
}

export default App;
