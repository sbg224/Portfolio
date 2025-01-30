import { useState } from "react";
import emailjs from "emailjs-com";
import "@fortawesome/fontawesome-free/css/all.min.css";
import style from "./About.module.css";
import Formulaire from "../components/Formulaire";

function About() {
	const [isLoading, setIsLoading] = useState(false);
	const [datas, setDatas] = useState({
		name: "",
		lastName: "",
		email: "",
		telephone: "",
		message: "",
	});

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const handleChange = (e: {
		preventDefault: () => void;
		target: { name: any; value: any };
	}) => {
		e.preventDefault();
		const { name, value } = e.target;
		setDatas((prevDatas) => ({
			...prevDatas,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (
			!datas.name ||
			!datas.lastName ||
			!datas.email ||
			!datas.telephone ||
			!datas.message
		) {
			alert("Tous les champs sont obligatoires");
			return;
		}
		const serviceId = "service_n23khuf";
		const templateId = "template_ch7qhh9";
		const userId = "PYfG0AhV0bjfzSYAj";

		setIsLoading(true);

		emailjs
			.send(
				serviceId,
				templateId,
				{
					name: datas.name,
					lastName: datas.lastName,
					email: datas.email,
					telephone: datas.telephone,
					message: datas.message,
				},
				userId,
			)
			.then(
				(result) => {
					alert("Formulaire soumis avec succès !");
					console.log(result.text);
					// Réinitialiser le formulaire
					setIsLoading(false);

					setDatas({
						name: "",
						lastName: "",
						email: "",
						telephone: "",
						message: "",
					});
				},
				(error) => {
					alert("Une erreur est survenue. Essayez à nouveau.");
					console.log(error.text);
					setIsLoading(false);
				},
			);
	};

	return (
		<div className={style.aboutG}>
			<div className={style.titleText}>
				<h2>A propos</h2>
				<p>
					Développeur web en reconversion, je conçois des solutions modernes et
					accessibles avec HTML, CSS, JavaScript et React. Curieux et motivé, je
					suis toujours prêt à relever de nouveaux défis et à collaborer sur des
					projets innovants.
				</p>
			</div>
			<Formulaire
				handleChange={handleChange}
				datas={datas}
				handleSubmit={handleSubmit}
				isLoading={isLoading}
			/>
		</div>
	);
}

export default About;
