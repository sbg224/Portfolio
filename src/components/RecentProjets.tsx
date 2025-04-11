import style from "./RecentProjets.module.css";
import { useContext, useRef, useEffect, useState } from "react";
import { MyArryContext } from "../context/ContextProjet";
import gsap from "gsap";

function RecentProjets() {
  const myProjetsContext = useContext(MyArryContext);
  if (!myProjetsContext) {
    throw new Error(
      "Le contexte MyArryContext doit être utilisé dans un MyArryProvider"
    );
  }
  const { recentProjets } = myProjetsContext;
  const projetsToShow = recentProjets;
  const carouselRef = useRef<HTMLLIElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const container = containerRef.current;
    if (carousel && projetsToShow.length > 0 && container) {
      gsap.to(carousel, {
        x: `-${currentIndex * container.offsetWidth}px`,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [currentIndex, projetsToShow.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projetsToShow.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projetsToShow.length - 1 : prevIndex - 1
    );
  };

  const handleSeeMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    const listItem = event.currentTarget.closest(`.${style.projectCard}`);
    if (listItem) {
      listItem.classList.toggle(style.expanded);
    }
  };

  return (
    <div className={style.recentPG}>
      <h2>Mes réalisations récentes</h2>
      <div className={style.container} ref={containerRef}>
        {/* Bouton Précédent */}
        <button
          type="button"
          className={`${style.carouselButton} ${style.prev}`}
          onClick={prevSlide}
          aria-label="Projet précédent"
        >
          <i className="fas fa-chevron-left" />
        </button>
        
        {/* Liste des projets */}
        <ul className={style.recentPUl}>
          {projetsToShow.map((projet, index) => (
            <li ref={carouselRef} className={style.projectCard} key={projet.id}>
              <h3>{projet.name}</h3>
              <img
                className={style.projectImage}
                src={projet.imgSrc}
                alt={projet.description}
              />
              <div className={style.projectInfo}>
                {projet.technologies && (
                  <p className={style.projectTechnologies}>
                    Technologies: {projet.technologies.join(", ")}
                  </p>
                )}
                {projet.description && (
                  <div className={style.descriptionContainer}>
                    <p className={style.projetDescription}>
                      {projet.description.slice(0, 100)}...
                    </p>
                    {projet.description.length > 100 && (
                      <button
                        type="button"
                        className={style.seeMoreButton}
                        onClick={handleSeeMore}
                      >
                        Voir plus
                      </button>
                    )}
                  </div>
                )}
                {projet.lien && (
                  <a
                    href={projet.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.projetLink}
                  >
                    Voir le projet
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Dots pour la pagination */}
        {/* {projetsToShow.length > 1 && (
          <div className={style.carouselDots}>
            {projetsToShow.map((projet, index) => (
              <button
                type="button"
                key={projet.id}
                className={`${style.carouselDot} ${
                  index === currentIndex ? style.active : ""
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Aller au projet ${index + 1}`}
              />
            ))}
          </div>
        )} */}

        {/* Bouton Suivant */}
        <button
          type="button"
          className={`${style.carouselButton} ${style.next}`}
          onClick={nextSlide}
          aria-label="Projet suivant"
        >
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}

export default RecentProjets;