import style from "./Projets.module.css";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type myProjetsType = {
	myProjets: {
		id: number;
		name: string;
		description: string;
		imgSrc: string;
		lien: string;
	}[];
};

gsap.registerPlugin(ScrollTrigger);

function Projets({ myProjets }: myProjetsType) {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	// const effeScroll = useRef<HTMLUListElement>(null);
	// useEffect(() => {
	//   if (effeScroll.current) { // Vérifie si l'élément est bien défini
	//     const listItems = effeScroll.current.children;

	//     // Définir l'animation GSAP pour faire défiler les éléments horizontalement
	//     gsap.to(listItems, {
	//       x: "100%", // Déplace les éléments vers la droite
	//       stagger: 0.1, // Décale légèrement chaque élément pour l'animation
	//       duration: 2, // Durée de l'animation
	//       repeat: -1, // Répète l'animation indéfiniment
	//       ease: "none", // Utilise une courbe de transition linéaire pour un défilement constant
	//     });
	//   }
	// }, []);

	return (
		<div className={style.projetG}>
			<h2> Mes projets</h2>
			{/* Mes section pour chaque projet */}
			{/* 1er section */}
			<section className={style.sectionProjet}>
				<div
					className={style.divContaiteur}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					onFocus={handleMouseEnter}
					onBlur={handleMouseLeave}
				>
					{!isHovered ? (
						<h3>
							{myProjets[0].name}
						</h3>
					) : (
						<img src={myProjets[0]?.imgSrc} alt={myProjets[0].description} />
					)}
				</div>
				<div className={style.viewDiv}>
					<a href={myProjets[0].lien}>View more</a>
				</div>
			</section>
			{/* 2er section */}
			<section className={style.sectionProjet}>
				<h3>{myProjets[1].name}</h3>
				<div className={style.viewDiv}>
					<a href={myProjets[1].lien}>View more</a>
				</div>
			</section>
			{/* 3er section */}
			<section className={style.sectionProjet}>
				<h3>{myProjets[2].name}</h3>
				<div className={style.viewDiv}>
					<a href={myProjets[2].lien}>View more</a>
				</div>
			</section>
			<div className={style.lineStyle}> </div>
		</div>
	);
}

export default Projets;
