import type { NavigateFunction } from "react-router-dom";

import style from "./ButtonNav.module.css";

type myButtonType = {
	handleChange: NavigateFunction;
	path: string;
	name: string;
	color: string;
};

function ButtonNav({ handleChange, path, name}: myButtonType) {
	return (
		<div>
			<button
				className={style.button}
				type="button"
				onClick={() => handleChange(path)}
			>
				{name}
			</button>
		</div>
	);
}

export default ButtonNav;
