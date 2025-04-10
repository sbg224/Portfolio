import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./Header.module.css";
import Arrow from "../assets/Group 157.svg";
import profile from "../assets/profile-boss.png";
import { Link } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

function Header() {
  const [showHeader, setShowHeader] = useState(false);

  // Références pour les animations GSAP
  const introText = useRef<HTMLParagraphElement>(null);
  const Bienvenue = useRef<HTMLParagraphElement>(null);
  const pageTransit = useRef<HTMLDivElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLImageElement>(null);
  const presHeaderRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const hasAnimated = localStorage.getItem("hasAnimated");
    const page = pageTransit.current;
    const texts = textContainer.current?.children;

    if (!page || !texts) {
      console.warn(
        "pageTransit ou textContainer est null, l'animation ne démarre pas."
      );
      return;
    }

    if (page && texts && !hasAnimated) {
      const tl = gsap.timeline({
        onComplete: () => {
          setShowHeader(true);
          localStorage.setItem("hasAnimated", "true"); // Marquer l'animation comme jouée
        },
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
    } else if (hasAnimated) {
      setShowHeader(true); // Si l'animation a déjà été jouée, afficher directement le header
    }
  }, []);

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
        delay: 3,
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
  useEffect(() => {
    if (profileRef.current) {
      gsap.to(profileRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
      });
    }
  }, []);

  useEffect(() => {
    const letters = presHeaderRef.current?.querySelectorAll("span");
    if (letters) {
      gsap.fromTo(
        letters,
        {
          scale: 0.8, // Les lettres commencent petites
          opacity: 0, // Initialement invisibles
          y: 20,
        },
        {
          scale: 1.2, // Les lettres s'agrandissent légèrement
          opacity: 1, // Elles deviennent visibles
          y: 0,
          duration: 0.3,
          stagger: 0.1, // Décalage entre les lettres pour un effet en cascade
          ease: "power2.out", // Animation fluide
          // repeat: 1,  // Animation infinie
          // yoyo: true,  // Aller-retour
        }
      );
    }
  }, []);

  return (
    <div className={style.headerG}>
      <Link to="home" smooth={true} duration={500}>
        <h1 className={style.PortfolioLogo}>&copy; BAH Mohamed</h1>
      </Link>
      <p className={style.Bienvenue} ref={Bienvenue}>
        <div>H</div>
        <div>E</div>
        <div>L</div>
        <div>L</div>
        <div>O</div>
        <div>!</div>
        {/* <div>m</div>
        <div>e</div> */}
      </p>
      <img src={Arrow} alt="Arrière plan" className={style.Arrow} />
      <p className={style.presHeader} ref={presHeaderRef}>
        {"“Hello, I’m Mohamed BAH, a Full-Stack Developer. I’m 22 years old and based in Toulouse.”"
          .split("")
          .map((char, index) => (
            <span key={index}>{char}</span>
          ))}
      </p>
      <img
        ref={profileRef}
        src={profile}
        alt="Arrière plan"
        className={style.profile}
      />
      <p className={style.intro} ref={introText}>
        Développeur web en formation, passionné par la création de solutions
        modernes et adaptatives. À la recherche d’une alternance pour développer
        et appliquer mes compétences dans des environnements collaboratifs et
        dynamiques.
      </p>
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
