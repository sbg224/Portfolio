import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ButtonNav from "./ButtonNav";
import { ShowModeContext } from "../context/ShowModeContext";
import { FaBars, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import style from "./NavBar.module.css";

// type myType = {
// 	showNav: boolean;
// }

function NavBar() {
	const { showNav, setShowNav } = useContext(ShowModeContext);

	const myButtonH = useNavigate();
	const myButtonP = useNavigate();
	const myButtonA = useNavigate();

	  // Fonction pour gérer l'affichage de la navigation
		const handleShow = () => {
			setShowNav(!showNav); // Inverser la valeur de showNav
		};

	return (
		<div>
			<nav className={style.navHeader}>
				<Link to={"/"}>
					<h1 className={style.PortfolioLogo}>&copy; BAH Mohamed</h1>
				</Link>
				<div className={`${style.buttons} ${showNav ? style.burgerMenue : ""}`}>
					<ButtonNav
						handleChange={myButtonH}
						path="/"
						name="Home"
						color="#9492DC"
					/>
					<ButtonNav
						handleChange={myButtonP}
						path="/Skils"
						name="My skils"
						color="#FCD489"
					/>
					<ButtonNav
						handleChange={myButtonA}
						path="/about"
						name="Contact"
						color="#88EE9E"
					/>
				</div>
				<ul className={style.ulNav}>
					<li className={style.liNav}>
						<a
							href="https://www.instagram.com/sam_bah11/profilecard/?igsh=bmw1dm45bDZmYW4y"
							rel="noopener noreferrer"
							className={style.iconinstagram}
						>
							<i className="fab fa-instagram" />
						</a>
						<a
							href="https://github.com/sbg224"
							rel="noopener noreferrer"
							className={style.iconGitHub}
						>
							<i className="fab fa-github" />
						</a>
						<a
							href="https://www.linkedin.com/in/mohamed-bah-aa38a1232/?utm"
							rel="noopener noreferrer"
							className={style.iconlinkedin}
						>
							<i className="fab fa-linkedin-in" />
						</a>
					</li>
				</ul>
			</nav>
			<button type="button" onClick={handleShow} className={style.buttonBurger}>
        {showNav ? <FaTimes /> : <FaBars />}
      </button>
		</div>
	);
}

export default NavBar;
