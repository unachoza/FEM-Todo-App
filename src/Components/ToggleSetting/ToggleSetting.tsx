import { useEffect, useState } from "react";
import sun from "../../assets/images/icon-sun.svg";
import moon from "../../assets/images/icon-moon.svg";
import Button from "../Button/Button";

type Theme = "light" | "dark";
const ToggleSetting = () => {
	const [theme, setTheme] = useState<Theme>(() => {
		const localtheme = localStorage.getItem("THEME");
		if (localtheme == null) return "light";
		return JSON.parse(localtheme);
	});

	useEffect(() => {
		document.body.setAttribute("dark-theme", theme);
		localStorage.setItem("THEME", JSON.stringify(theme));
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
	};

	return (
		<div>
			{theme === "light" ? (
				<Button onClick={toggleTheme} text={<img src={sun} alt="light mode" />} />
			) : (
				<Button onClick={toggleTheme} text={<img src={moon} alt="dark mode" />} />
			)}
		</div>
	);
};

export default ToggleSetting;
