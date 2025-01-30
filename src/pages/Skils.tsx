import "@fortawesome/fontawesome-free/css/all.min.css";
import style from "./Skils.module.css";

function Skils() {
	return (
		<div className={style.SkilsG}>
			<div className={style.DiplômesCompétances}>
				<div className={style.Diplômes}>
					<h2 className={style.title}>
						Diplômes <i className="fas fa-graduation-cap" />
					</h2>
					<ul>
						<li className={style.liDiplome}>
							<div>
								<i className="fas fa-laptop-code" /> Formation développeur web
								et web mobile - Wild Code School / Bootcamp
							</div>
							<div>
								<i className="fas fa-graduation-cap" /> Bac professionnel -
								Technicien conseil et vente
							</div>
							<div>
								<i className="fas fa-leaf" /> BEP Lycée Agricole de
								Saint-Gaudens
							</div>
						</li>
					</ul>
				</div>
				<div className={style.Compétances}>
					<h2 className={style.title}>
						Compétances <i className="fas fa-tools" />
					</h2>
					<ul>
						<li className={style.liCompétance}>
							<div>
								<i className="fab fa-html5" /> HTML
							</div>
							<div>
								<i className="fab fa-css3-alt" /> CSS
							</div>
							<div>
								<i className="fab fa-js" /> JavaScript (ES6)
							</div>
							<div>
								<i className="fas fa-database" /> SQL (MySQL)
							</div>
							<div>
								<i className="fab fa-react" /> React
							</div>
							<div>
								<i className="fas fa-cogs" /> Node.js
							</div>
							<div>
								<i className="fab fa-git" /> Git
							</div>
							<div>
								<i className="fab fa-github" /> GitHub
							</div>
							<div>
								<i className="fab fa-vscode" /> VS Code
							</div>
							<div>
								<i className="fab fa-figma" /> Figma
							</div>
							<div>
								<i className="fas fa-table" /> Excel
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Skils;
