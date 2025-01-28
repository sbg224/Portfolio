import style from "./HomePage.module.css";
import Projets from "../components/Projets";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const TabProjets = [
	{
		id: 0,
		name: "Projet de groupe - Page Culture d’une agence de tourisme fictive",
		description:
			"Dans le cadre de notre formation, nous avons travaillé sur plusieurs projets, dont l’un où j’ai eu l’opportunité d’apporter ma contribution. J’étais responsable de la création de la page Culture pour une agence de tourisme fictive. Ce projet m’a permis de mettre en pratique mes compétences en HTML, CSS et JavaScript pour développer une interface fluide et interactive. Pour la collaboration en équipe et la gestion des versions, nous avons utilisé GitHub, ce qui nous a permis de suivre l’évolution du projet et de travailler efficacement à plusieurs. Ce projet a été une excellente occasion de renforcer mes compétences techniques tout en collaborant de manière structurée.Dans le cadre de notre formation nous etions amené a effectué plusieurs projet dont celui-ci dans lequel j'ai puis apporter ma contribution j'etais charger de réaliser la page Culture d'une agence de tourisme fictive ",
		imgSrc:
			"https://img.freepik.com/photos-gratuite/belle-fleur-unique-gouttelettes-eau-refletant-couleurs-generees-par-ia_188544-15542.jpg?ga=GA1.1.2058682870.1734466195&semt=ais_hybrid",
		lien: "https://github.com/Luigi-44/Projet1Wildcity.git", // Lien vers le projet
	},
	{
		id: 1,
		name: "Hackathon 24H - Site de Rencontre Intergalactique ",
		description:
			"Lors de ce hackathon de 24 heures, nous avons travaillé en équipe pour créer un site de rencontre intergalactique en utilisant React. En tant que membre de l’équipe, j’ai été chargé de développer deux composants clés : le composant du formulaire d’inscription et celui du profil utilisateur. Ce projet a été une excellente opportunité de travailler sur des aspects essentiels du front-end tout en collaborant sous contrainte de temps. L’utilisation de React a permis de créer une interface dynamique et fluide, et nous avons su allier créativité et technologie pour proposer un site unique en son genre. ",
		imgSrc:
			"https://img.freepik.com/photos-gratuite/belle-fleur-unique-gouttelettes-eau-refletant-couleurs-generees-par-ia_188544-15542.jpg?ga=GA1.1.2058682870.1734466195&semt=ais_hybrid",
		lien: "https://github.com/sbg224/AstroMatch.git", // Lien vers le projet
	},
	{
		id: 2,
		name: "Portfolio - Développeur Web et Web Mobile",
		description:
			"Mon portfolio présente mes compétences et projets en développement web et web mobile. Réalisé avec HTML, CSS, JavaScript et React, il inclut une présentation de mes réalisations, mes compétences techniques et une page de contact. Ce projet met en avant ma capacité à créer un site web complet et fonctionnel. ",
		imgSrc:
			"https://img.freepik.com/photos-gratuite/belle-fleur-unique-gouttelettes-eau-refletant-couleurs-generees-par-ia_188544-15542.jpg?ga=GA1.1.2058682870.1734466195&semt=ais_hybrid",
		lien: "https://github.com/sbg224/Portfolio.git", // Lien vers le projet
	},
];

function HomePage() {
	const [ProjetIndex, setProjetIndex] = useState(0);

	const buttonCarrousel1 = useRef<HTMLButtonElement>(null)
	const buttonCarrousel2 = useRef<HTMLButtonElement>(null)

	const tl = gsap.timeline()

	useGSAP(() => {
		tl.to(buttonCarrousel1.current, {
			x:"10px",
			scale: 1.3,
			duration:.6,
			yoyo: true,
			repeat: -1,
		})
		tl.to(buttonCarrousel2.current, {
			x:"-10px",
			scale: 1.1,
			duration:.6,
			yoyo: true,
			repeat: -1,
		})
	},[])

	// const handleNext = () => {
	// 	setProjetIndex((ProjetIndex) =>
	// 		ProjetIndex === TabProjets.length - 1 ? 0 : ProjetIndex + 1,
	// 	);
	// };

	// // Fonction pour aller au Pokémon précédent
	// const handlePrevious = () => {
	// 	setProjetIndex((ProjetIndex) =>
	// 		ProjetIndex === 0 ? TabProjets.length - 1 : ProjetIndex - 1,
	// 	);
	// };

	return (
		<div className={style.Carrousel}>
			<Projets myProjets={TabProjets} />
			{/* [TabProjets[ProjetIndex]] */}
			{/* <button type="button" onClick={handlePrevious} ref={buttonCarrousel1} >
				⇠
			</button>
			<button type="button" onClick={handleNext} ref={buttonCarrousel2} >
				⇢
			</button> */}
		</div>
	);
}

export default HomePage;
