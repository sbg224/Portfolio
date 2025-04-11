
import style from "./Footer.module.css";

function Footer() {
	return (
		<div className={style.footerG}>
			<div className={style.contianerFooter2}>
				<p>&copy; 2024 BAH Mohamed. Tous droits réservés.</p>
				<nav className={style.navFooter}>
					{/* <a className={style.PortfolioLogo} href="https://www.linkedin.com/in/mohamed-bah-aa38a1232/?utm">Portfolio</a> */}
					<ul className={style.ulNav}>
						<li className={style.liNavFooter}>
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
			</div>
		</div>
	);
}

export default Footer;
