import style from "./Projets.module.css";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
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
			<div className={style.lineStyle}> </div>
			<section className={style.sectionProjet}>
				<div className={style.listText}>
					<div>
						<h3>{myProjets[0].name}</h3>
					</div>
					<div>
						<a href={myProjets[0].lien}>En savoir plus</a>
					</div>
				</div>
			</section>
			<div className={style.lineStyle}> </div>
			<section className={style.sectionProjet}>
				<div className={style.listText}>
					<h3>{myProjets[1].name}</h3>
					<a href={myProjets[1].lien}>En savoir plus</a>
				</div>
			</section>
			<div className={style.lineStyle}> </div>
			<section className={style.sectionProjet}>
				<div className={style.listText}>
					<div>
						<h3>{myProjets[2].name}</h3>
					</div>
					<div>
						<a href={myProjets[2].lien}>En savoir plus</a>
					</div>
				</div>
			</section>
			<div className={style.lineStyle}> </div>
			{/* <ul className={style.projetUl} >
				{myProjets.map((myProjet) => (
					<li key={myProjet.id} className={style.projetList}>
						<img
							src={myProjet.imgSrc}
							alt={myProjet.name}
							className={style.listImgSrc}
						/>
						<div className={style.listText}>
							<h3>{myProjet.name}</h3>
							<p>{myProjet.description}</p>
							<a href={myProjet.lien}>En savoir plus</a>
						</div>
					</li>
				))}
			</ul> */}
		</div>
	);
}

export default Projets;
