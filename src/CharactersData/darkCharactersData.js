// importing images

import yorForger from "../assets/Spy Family/yorDark.mp4";
// import anyaForger from "./assets/Spy Family/anya.jpg";
import loidForger from "../assets/Spy Family/loidDark.mp4";
import echidna from "../assets/Re;0/echidnaDark.mp4";
import subaru from "../assets/Re;0/subaruDark.mp4";
import rem from "../assets/Re;0/remDark.mp4";

import okarin from "../assets/Steins;Gate/okarinDark.mp4";

function darkCharacters() {
	const charactersArr = [
		// Re;0

		{
			id: "echidna",
			url: echidna,
			tagLine: "Witch of Greed",
			// photo edit properties
			color: "text-slate-300",
			brightness: "brightness-120 ",
			contrast: "contrast-100",
		},

		// Spy X Family

		{
			id: "yor",
			url: yorForger,
			tagLine: "Thorn Princess",
			// photo edit properties
			color: "text-red-600",
			// brightness: "brightness-125 ",
		},

		/* {
			id: "anya",
			url: anyaForger,
			tagLine: "Anya Likes Peanut",
			// photo edit properties
			color: "text-red-200",
			brightness: "brightness-90 ",
		}, */

		{
			id: "loid",
			url: loidForger,
			tagLine: "Twilight",
			// photo edit properties
			color: "text-green-400",
			// brightness: "brightness-95 ",
			// contrast: "contrast-90",
		},

		// Re;0

		{
			id: "subaru",
			url: subaru,
			tagLine: "Suffaru",
			// photo edit properties
			color: "text-orange-400",
			// brightness: "brightness-90 ",
			// contrast: "contrast-90",
		},
		{
			id: "rem",
			url: rem,
			tagLine: "Demonically Inspired",
			// photo edit properties
			color: "text-cyan-300",
			brightness: "brightness-125 ",
			contrast: "contrast-100",
		},
		{
			id: "okarin",
			url: okarin,
			tagLine: "Mad Scientist",
			// photo edit properties
			color: "text-green-400",
			brightness: "brightness-100 ",
			contrast: "contrast-100",
		},
	];
	return charactersArr;
}

export default darkCharacters;
