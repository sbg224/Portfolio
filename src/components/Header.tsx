import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { ShowModeContext } from "../context/ShowModeContext";
import { useContext } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./Header.module.css";
import Arrow from "../assets/Group 157.svg";
import NavBar from "./NavBar";

gsap.registerPlugin(ScrollTrigger);

function Header() {
  const { showNav, setShowNav } = useContext(ShowModeContext);
  const [showHeader, setShowHeader] = useState(false);
  const [playGsap, setPlayGsap] = useState(true);

  //leins pour les annimations GSAP
  const introText = useRef<HTMLParagraphElement>(null);
  const Bienvenue = useRef<HTMLParagraphElement>(null);
  const pageTransit = useRef<HTMLDivElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageTransit.current;
    const texts = textContainer.current?.children;

    if (!page || !texts) {
      console.warn(
        "pageTransit ou textContainer est null, l'animation ne démarre pas."
      );
      return;
    }

    if (page && texts && playGsap) {
      const tl = gsap.timeline({
        onComplete: () => setShowHeader(true), // Afficher le header après l'animation
      });

      // Animation des textes en cascade
      tl.fromTo(
        texts,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.2,
          rotate: "360%",
          ease: "power2.out",
        }
      )
        .to(texts, { opacity: 0, y: -20, stagger: 0.2, duration: 0.3 }, "+=1")
        .to(page, { y: "-100%", duration: 1, ease: "power3.inOut" });
    }
    setPlayGsap(false);
  }, [playGsap]);

  useGSAP(() => {
    gsap.from(introText.current, {
      y: "180%",
      scale: 0.5,
      opacity: 0,
      duration: 1.2,
      delay: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: introText.current,
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
        toggleActions: "play, reverse, restart",
        // markers: true,
      },
    });
    if (Bienvenue.current) {
      const letters = Bienvenue.current.children;
      // Animation des lettres
      const tl = gsap.timeline({ yoyo: true });
      tl.from(letters, {
        y: "20vh",
        rotate: "180deg",
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        delay: 5,
        ease: "power2.out",
      })
        .to(letters, {
          x: "40%",
          duration: 0.6,
          ease: "power1.inOut",
        })
        .to(letters, {
          x: "0",
          duration: 0.6,
          ease: "power1.inOut",
        });
    }
  }, []);

  // Fonction pour gérer l'affichage de la navigation
  const handleShow = () => {
    setShowNav(!showNav); // Inverser la valeur de showNav
  };

  return (
    <div className={style.headerG}>
      <NavBar />
      <p className={style.Bienvenue} ref={Bienvenue}>
        <div>H</div>
        <div>E</div>
        <div>L</div>
        <div>L</div>
        <div>o</div>
        <div>!</div>
        {/* <div>m</div>
				<div>e</div> */}
      </p>
      <img src={Arrow} alt="Arrière plan" className={style.Arrow} />
      <p className={style.presHeader}>
        “Hello, I’m Mohamed BAH, a Full-Stack Developer. I’m 22 years old and
        based in Toulouse.”
      </p>
      <p className={style.intro} ref={introText}>
        Développeur web en formation, passionné par la création de solutions
        modernes et adaptatives. À la recherche d’une alternance pour développer
        et appliquer mes compétences dans des environnements collaboratifs et
        dynamiques.
      </p>
      <button type="button" onClick={handleShow} className={style.buttonBurger}>
        {showNav ? <FaTimes /> : <FaBars />}
      </button>
      {!showHeader && (
        <div ref={pageTransit} className={style.pageTransit}>
          <div ref={textContainer} className={style.textAnimation}>
            <p>Bonjour</p>
            <p>Hello</p>
            <p>Welcome</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
