
import ProfilC from "../assets/profile-pic.png"
import style from "./Footer.module.css";

function Footer() {
	return (
		<div className={style.footerG}>
			<div className={style.contianerFooter1}>
			{/* <div className={style.divStyleP}> 
				<div className={style.divStyleG}> </div>
			</div> */}
				<div className={style.profilfooter}>
					<p>
						<img src={ProfilC} alt="profil contact" className={style.profilCImg}/>
						Merci de votre visite !
					</p>
				</div>
				{/* <div className={style.constct}>
					<a className={style.emailC} href="mailto:sambah450@gmail.com">My email : sambah450@gmail.com</a>
					<a className={style.tel} href="tel:mailto:+33751044407">My tel : +33751044407</a>
				</div> */}
			</div>
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
