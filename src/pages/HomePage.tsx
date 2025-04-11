import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { MyArryProvider } from "../context/ContextProjet";
import { useTheme } from "../context/ThemeContext"; // Importer le contexte du thème
import gsap from "gsap";
import Projects from "./Projects";
import Header from "../components/Header";
import Skills from "./Skils";
import Contact from "./About";
import style from "./HomePage.module.css";
import NavBar from "../components/NavBar";

function HomePage() {
  const { isDarkMode } = useTheme(); // Récupérer l'état du mode sombre

  const buttonCarrousel1 = useRef<HTMLButtonElement>(null);
  const buttonCarrousel2 = useRef<HTMLButtonElement>(null);

  const tl = gsap.timeline();

  useGSAP(() => {
    tl.to(buttonCarrousel1.current, {
      x: "10px",
      scale: 1.3,
      duration: 0.6,
      yoyo: true,
      repeat: -1,
    });
    tl.to(buttonCarrousel2.current, {
      x: "-10px",
      scale: 1.1,
      duration: 0.6,
      yoyo: true,
      repeat: -1,
    });
  }, []);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light");
    } else {
      htmlElement.classList.add("light");
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div>
      <NavBar />
      <MyArryProvider>
        <section id="home" className={style.section}>
          <Header />
        </section>
        <section id="projects" className={style.section}>
          <Projects />
        </section>
        <section id="skills" className={style.section}>
          <Skills />
        </section>
        <section id="contact" className={style.section}>
          <Contact />
        </section>
      </MyArryProvider>
    </div>
  );
}

export default HomePage;
