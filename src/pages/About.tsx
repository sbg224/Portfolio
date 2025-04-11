// import { useState } from "react";
// import emailjs from "emailjs-com";
import "@fortawesome/fontawesome-free/css/all.min.css";
import gamil from "../assets/gmail.png";
import whatsApp from "../assets/whatsapp.png";
import style from "./About.module.css";
// import Formulaire from "../components/Formulaire";
import CV from "../assets/Mohamed bah-dev.pdf";

function About() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [datas, setDatas] = useState({
  //   name: "",
  //   lastName: "",
  //   email: "",
  //   telephone: "",
  //   message: "",
  // });

  const phoneNumber = "+33751044407"; // Ton numéro WhatsApp
  const message = "Bonjour, je souhaite vous contacter via votre site.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  // const handleChange = (e: {
  //   preventDefault: () => void;
  //   // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  //   target: { name: any; value: any };
  // }) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   setDatas((prevDatas) => ({
  //     ...prevDatas,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (
  //     !datas.name ||
  //     !datas.lastName ||
  //     !datas.email ||
  //     !datas.telephone ||
  //     !datas.message
  //   ) {
  //     alert("Tous les champs sont obligatoires");
  //     return;
  //   }
  //   const serviceId = "service_n23khuf";
  //   const templateId = "template_ch7qhh9";
  //   const userId = "PYfG0AhV0bjfzSYAj";

  //   setIsLoading(true);

  //   emailjs
  //     .send(
  //       serviceId,
  //       templateId,
  //       {
  //         name: datas.name,
  //         lastName: datas.lastName,
  //         email: datas.email,
  //         telephone: datas.telephone,
  //         message: datas.message,
  //       },
  //       userId
  //     )
  //     .then(
  //       (result) => {
  //         alert("Formulaire soumis avec succès !");
  //         console.log(result.text);
  //         // Réinitialiser le formulaire
  //         setIsLoading(false);

  //         setDatas({
  //           name: "",
  //           lastName: "",
  //           email: "",
  //           telephone: "",
  //           message: "",
  //         });
  //       },
  //       (error) => {
  //         alert("Une erreur est survenue. Essayez à nouveau.");
  //         console.log(error.text);
  //         setIsLoading(false);
  //       }
  //     );
  // };

  return (
    <>
      <div className={style.aboutG}>
        <div className={style.titleText}>
          <h2>À Propos</h2>
          <p>
            Passionné par le monde du web et fort d'une récente reconversion
            professionnelle, je suis un développeur web et web mobile déterminé
            à transformer des idées en réalités numériques. Mon parcours,
            enrichi par une expérience significative dans la gestion et le
            service client chez Carrefour City, m'a doté d'une solide capacité
            d'adaptation, d'un sens aigu de l'organisation et d'un excellent
            relationnel.
          </p>
          <p>
            Animé par une soif d'apprendre constante, j'ai plongé avec
            enthousiasme dans les technologies clés du développement front-end
            (React, TypeScript, HTML, CSS, JavaScript, GSAP) et back-end
            (Node.js, Express.js, SQL - MySQL). Ma participation active à des
            projets collaboratifs comme CHUKO Manga et Night-Flow témoigne de
            mon esprit d'équipe, de ma curiosité technique et de ma capacité à
            gérer le stress dans des environnements dynamiques.
          </p>
          <p>
            Je suis particulièrement attiré par la conception de solutions
            innovantes et accessibles, où l'esthétique rencontre la
            fonctionnalité. Mon objectif est de mettre mes compétences
            techniques et mon savoir-être au service d'une entreprise qui
            valorise l'engagement, la communication et la réactivité. Ouvert aux
            opportunités et désireux de m'investir pleinement dans un nouveau
            projet professionnel, je suis prêt à relever les défis et à
            contribuer activement au succès de votre équipe.
          </p>
          <a
            href={CV}
            download="Mohamed_Bah_CV.pdf"
            className={style.downloadButton}
          >
            <i className="fas fa-download" /> Télécharger mon CV
          </a>
        </div>

        <p>Vous pouvez me contacter via:</p>

        <div className={style.contact}>
          <div className={style.WhatsApp}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={whatsApp} alt="contact" className={style.imgContact} />
            </a>
            <p>WhatsApp</p>
          </div>
          <div className={style.email}>
            <a
              href="mailto:sambah450@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gamil} alt="contact" className={style.imgContact} />
            </a>
            <p>Gmail</p>
          </div>
        </div>
        {/* <div className={style.formContainer}>
          <Formulaire
            handleChange={handleChange}
            datas={datas}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div> */}
      </div>
    </>
  );
}

export default About;
