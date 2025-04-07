// import { useLoaderData } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {MyArryProvider} from "../context/ContextProjet";
import gsap from "gsap";
import Projets from "../components/Projets";
import Header from "../components/Header";



function HomePage() {
	// const projetDatas = useLoaderData();

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
		<div>
			<MyArryProvider>
				<Header />
				<Projets />
			</MyArryProvider>
		</div>
	);
}

export default HomePage;
