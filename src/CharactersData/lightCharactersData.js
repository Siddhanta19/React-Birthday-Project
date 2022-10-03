// importing images

import yorForger from "../assets/Spy Family/yorLight.mp4";
// import anyaForger from "./assets/Spy Family/anya.jpg";
import ania from "../assets/Spy Family/aniaLight.mp4";
import loidForger from "../assets/Spy Family/loidLight.mp4";

import violet from "../assets/Violet Evergarden/violetLight.mp4";

import subaru from "../assets/Re;0/subaruDark.mp4";
import rem from "../assets/Re;0/remLight.mp4";

import okarin from "../assets/Steins;Gate/okarinLight.mp4";

function lightCharacters() {
	const charactersArr = [
		// Spy X Family

		{
			id: "ania",
			url: ania,
			tagLine: "Starlight Ania",
			// photo edit properties
			color: "text-red-200",
			brightness: "brightness-90 ",
		},

		// Re;0

		/* {
			id: "echidna",
			url: echidna,
			tagLine: "Witch of Greed",
			// photo edit properties
			color: "text-slate-300",
			brightness: "brightness-120 ",
			contrast: "contrast-100",
		}, */

		// Spy X Family

		{
			id: "yor",
			url: yorForger,
			tagLine: "Thorn Princess",
			// photo edit properties
			color: "text-yellow-300",
			// brightness: "brightness-125 ",
		},

		/* {
			id: "ania",
			url: ania,
			tagLine: "Starlight Ania",
			// photo edit properties
			color: "text-red-200",
			brightness: "brightness-90 ",
		}, */

		{
			id: "loid",
			url: loidForger,
			tagLine: "Twilight",
			// photo edit properties
			color: "text-green-200",
			// brightness: "brightness-95 ",
			// contrast: "contrast-90",
		},

		// Re;0

		{
			id: "violet",
			url: violet,
			tagLine: "Auto Memory's Doll",
			// photo edit properties
			color: "text-orange-300",
			// brightness: "brightness-90 ",
			// contrast: "contrast-90",
		},

		{
			id: "okarin",
			url: okarin,
			tagLine: "Mad Scientist",
			// photo edit properties
			color: "text-white",
			brightness: "brightness-100 ",
			contrast: "contrast-100",
		},

		{
			id: "rem",
			url: rem,
			tagLine: "Demonically Inspired",
			// photo edit properties
			color: "text-cyan-300",
			brightness: "brightness-100 ",
			contrast: "contrast-100",
		},
	];
	return charactersArr;
}

export default lightCharacters;
