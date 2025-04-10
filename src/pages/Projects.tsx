import style from "./Projects.module.css";
import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { MyArryContext } from "../context/ContextProjet";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import RecentProjets from "../components/RecentProjets";


gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const myProjetsContext = useContext(MyArryContext);
  if (!myProjetsContext) {
    throw new Error(
      "Le contexte MyArryContext doit être utilisé dans un MyArryProvider"
    );
  }
  const { ProjetIndex } = myProjetsContext;

  const [isHovered, setIsHovered] = useState<{ [key: number]: boolean }>({
    0: false,
    1: false,
    2: false,
  });
  console.log(isHovered);

  const handleMouseEnter = (index: number) => {
    setIsHovered((prevState) => ({ ...prevState, [index]: true }));
  };

  const handleMouseLeave = (index: number) => {
    setIsHovered((prevState) => ({ ...prevState, [index]: false }));
  };

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Créer un tableau de refs si nécessaire
    if (sectionRefs.current.length !== ProjetIndex.length) {
      sectionRefs.current = Array(ProjetIndex.length).fill(null);
    }

    // Configurer les animations GSAP pour chaque section
    for (let i = 0; i < sectionRefs.current.length; i++) {
      const section = sectionRefs.current[i];
      if (section) {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              // markers: true,
            },
          }
        );
      }
    }

    return () => {
      const triggers = ScrollTrigger.getAll();
      for (const trigger of triggers) {
        trigger.kill();
      }
    };
  }, [ProjetIndex]);

  return (
    <div className={style.projetG}>
      <h2>Mes projets</h2>
      {/* Mes section pour chaque projet */}
      {/* 1er section */}
      {ProjetIndex.map((projet, index) => {
        const setRef = (el: HTMLDivElement | null) => {
          sectionRefs.current[index] = el;
        };
        return (
          <section key={projet.id} className={style.sectionProjet} ref={setRef}>
            <div
              className={style.divContaiteur}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onFocus={() => handleMouseEnter(index)}
              onBlur={() => handleMouseLeave(index)}
            >
              <h3>{projet.name}</h3>
              {projet.lien.includes("github") ? (
                <img
                  className={style.listImgSrc}
                  src={projet.imgSrc}
                  alt={projet.description}
                />
              ) : (
                <iframe
                  className={style.listImgSrc}
                  src={projet.lien}
                  title="my portfolio"
                >
                  my portfolio
                </iframe>
              )}
            </div>
            <div className={style.viewDiv}>
              <a href={projet.lien} target="_blank" rel="noopener noreferrer">
                View more
              </a>
            </div>
          </section>
        );
      })}
      <div>
        <RecentProjets />
      </div>
    </div>
  );
}

export default Projects;
