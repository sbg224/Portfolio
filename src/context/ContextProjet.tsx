import { createContext, useState, useContext, type ReactNode } from "react";

type myProjetsType = {
		id: number;
		name: string;
		description: string;
		imgSrc: string;
		lien: string;
		technologies: string[];
};

const TabProjets: myProjetsType [] = [
	{
		id: 0,
		name: "Projet de groupe - Page Culture d’une agence de tourisme fictive",
		description:
			"Dans le cadre de notre formation, nous avons travaillé sur plusieurs projets, dont l’un où j’ai eu l’opportunité d’apporter ma contribution. J’étais responsable de la création de la page Culture pour une agence de tourisme fictive. Ce projet m’a permis de mettre en pratique mes compétences en HTML, CSS et JavaScript pour développer une interface fluide et interactive. Pour la collaboration en équipe et la gestion des versions, nous avons utilisé GitHub, ce qui nous a permis de suivre l’évolution du projet et de travailler efficacement à plusieurs. Ce projet a été une excellente occasion de renforcer mes compétences techniques tout en collaborant de manière structurée.Dans le cadre de notre formation nous etions amené a effectué plusieurs projet dont celui-ci dans lequel j'ai puis apporter ma contribution j'etais charger de réaliser la page Culture d'une agence de tourisme fictive ",
		imgSrc:
			"https://media.licdn.com/dms/image/v2/D4E22AQHUCC5kQ2EzVg/feedshare-shrink_800/feedshare-shrink_800/0/1709763419280?e=1747267200&v=beta&t=j6fyB1rR5MZdG3XwvCkL3Yuwuv7sVhXoxffetDv29yE",
		lien: "https://github.com/Luigi-44/Projet1Wildcity.git",
		technologies: ["HTML", "CSS", "JavaScript", "TypeScript"], // Lien vers le projet
	},
	{
		id: 1,
		name: "Hackathon 24H - Site de Rencontre Intergalactique ",
		description:
			"Lors de ce hackathon de 24 heures, nous avons travaillé en équipe pour créer un site de rencontre intergalactique en utilisant React. En tant que membre de l’équipe, j’ai été chargé de développer deux composants clés : le composant du formulaire d’inscription et celui du profil utilisateur. Ce projet a été une excellente opportunité de travailler sur des aspects essentiels du front-end tout en collaborant sous contrainte de temps. L’utilisation de React a permis de créer une interface dynamique et fluide, et nous avons su allier créativité et technologie pour proposer un site unique en son genre. ",
		imgSrc:
			"https://media.licdn.com/dms/image/v2/D4E22AQHUCC5kQ2EzVg/feedshare-shrink_800/feedshare-shrink_800/0/1709763419280?e=1747267200&v=beta&t=j6fyB1rR5MZdG3XwvCkL3Yuwuv7sVhXoxffetDv29yE",
		lien: "https://github.com/sbg224/AstroMatch.git", // Lien vers le projet
		technologies: ["React", "CSS", "JavaScript", "TypeScript"],
	},
	{
		id: 2,
		name: "Portfolio - Développeur Web et Web Mobile",
		description:
			"Mon portfolio présente mes compétences et projets en développement web et web mobile. Réalisé avec HTML, CSS, JavaScript et React, il inclut une présentation de mes réalisations, mes compétences techniques et une page de contact. Ce projet met en avant ma capacité à créer un site web complet et fonctionnel. ",
		imgSrc:
			"https://img.freepik.com/photos-gratuite/belle-fleur-unique-gouttelettes-eau-refletant-couleurs-generees-par-ia_188544-15542.jpg?ga=GA1.1.2058682870.1734466195&semt=ais_hybrid",
		lien: "https://portfolio-pied-kappa-95.vercel.app/", // Lien vers le projet
		technologies: ["React", "CSS", "JavaScript", "TypeScript", "GSAP"],
	},
];
// Définir un type pour l'état du contexte
type MyswitchContextType = {
  ProjetIndex: myProjetsType[]; // ✅ Tableau d'objets myProjetsType
  setProjetIndex: (state: myProjetsType[] | ((prevState: myProjetsType[]) => myProjetsType[])) => void;
};

// Créer le contexte avec une valeur par défaut
export const MyArryContext = createContext<MyswitchContextType | undefined>(undefined);

// Provider pour fournir l'état du contexte
export const MyArryProvider = ({ children }: { children: ReactNode }) => {
  const [ProjetIndex, setProjetIndex] = useState<myProjetsType[]>(TabProjets); // ✅ Un tableau vide d'objets ProjetType

  return (
    <MyArryContext.Provider value={{ ProjetIndex, setProjetIndex }}>
      {children}
    </MyArryContext.Provider>
  );
};
export const MyArryProvider2 = ({ children }: { children: ReactNode }) => {
  const [ProjetIndex, setProjetIndex] = useState<myProjetsType[]>(TabProjets); // ✅ Un tableau vide d'objets ProjetType

  return (
    <MyArryContext.Provider value={{ ProjetIndex, setProjetIndex }}>
      {children}
    </MyArryContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useMyswitch = (): MyswitchContextType => {
  const context = useContext(MyArryContext);
  if (!context) {
    throw new Error("useMyswitch must be used within a MyswitchProvider");
  }
  return context;
};