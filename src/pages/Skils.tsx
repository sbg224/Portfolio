import "@fortawesome/fontawesome-free/css/all.min.css";
import style from "./Skils.module.css";


function Skils() {
  return (
    <>
      <div className={style.skillsPage}>
        <section className={style.education}>
          <h2 className={style.sectionTitle}>
            Éducation <i className="fas fa-graduation-cap" />
          </h2>
          <div className={style.educationList}>
            <div className={style.educationItem}>
              <i className="fas fa-laptop-code" />
              <div>
                <h3>Formation Développeur Web et Web Mobile</h3>
                <p>Wild Code School / Bootcamp - 2024-2025 (Bac+2)</p>
              </div>
            </div>
            <div className={style.educationItem}>
              <i className="fas fa-graduation-cap" />
              <div>
                <h3>Bac Professionnel - Technicien Conseil et Vente</h3>
                <p>2019-2022</p>
              </div>
            </div>
            <div className={style.educationItem}>
              <i className="fas fa-leaf" />
              <div>
                <h3>BEP</h3>
                <p>Lycée Agricole de Saint-Gaudens - 2019-2021</p>
              </div>
            </div>
          </div>
        </section>

        <section className={style.skills}>
          <h2 className={style.sectionTitle}>
            Compétences <i className="fas fa-tools" />
          </h2>
          <div className={style.skillsGrid}>
            <div className={style.skillCategory}>
              <h3>Front-End</h3>
              <div className={style.skill}>
                <i className="fab fa-html5" />
                <span>HTML</span>
              </div>
              <div className={style.skill}>
                <i className="fab fa-css3-alt" />
                <span>CSS</span>
              </div>
              <div className={style.skill}>
                <i className="fab fa-js" />
                <span>JavaScript (ES6)</span>
              </div>
              <div className={style.skill}>
                <i className="fab fa-react" />
                <span>React</span>
              </div>
              {/* Ajout Typscript qui est dans le CV */}
              <div className={style.skill}>
                <i className="fab fa-react" />
                <span>TypeScript</span>
              </div>
              {/* Ajout GSAP qui est dans le CV */}
              <div className={style.skill}>
                <i className="fa-brands fa-sourcetree" />
                <span>GSAP</span>
              </div>
            </div>

            <div className={style.skillCategory}>
              <h3>Back-End</h3>
              <div className={style.skill}>
                <i className="fas fa-database" />
                <span>SQL (MySQL)</span>
              </div>
              <div className={style.skill}>
                <i className="fas fa-cogs" />
                <span>Node.js</span>
              </div>
              {/* Ajout Express qui est dans le CV */}
              <div className={style.skill}>
                <i className="fas fa-cogs" />
                <span>Express.js</span>
              </div>
            </div>

            <div className={style.skillCategory}>
              <h3>Outils</h3>
              <div className={style.skill}>
                <i className="fab fa-git" />
                <span>Git</span>
              </div>
              <div className={style.skill}>
                <i className="fab fa-github" />
                <span>GitHub</span>
              </div>
              <div className={style.skill}>
                <i className="fab fa-vscode" />
                <span>VS Code</span>
              </div>
              <div className={style.skill}>
                <i className="fab fa-figma" />
                <span>Figma</span>
              </div>
              <div className={style.skill}>
                <i className="fas fa-table" />
                <span>Excel</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Skils;
