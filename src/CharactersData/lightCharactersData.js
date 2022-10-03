// importing images

import yorForger from "../assets/Spy Family/yorLight.mp4";
import yorPoster from "../assets/Spy Family/yorLight_Moment.jpg";
// import anyaForger from "./assets/Spy Family/anya.jpg";
import ania from "../assets/Spy Family/aniaLight.mp4";
import aniaPoster from "../assets/Spy Family/aniaLight_Moment.jpg";

import loidForger from "../assets/Spy Family/loidLight.mp4";
import loidPoster from "../assets/Spy Family/loid.jpeg";

import violet from "../assets/Violet Evergarden/violetLight.mp4";
import violetPoster from "../assets/Violet Evergarden/violetLight_Moment.jpg";

// import subaru from "../assets/Re;0/subaruDark.mp4";
import rem from "../assets/Re;0/remLight.mp4";
import remPoster from "../assets/Re;0/remLight_Moment.jpg";

import okarin from "../assets/Steins;Gate/okarinLight.mp4";
import okarinPoster from "../assets/Steins;Gate/okarinLight_Moment.jpg";

function lightCharacters() {
	const charactersArr = [
		// Spy X Family

		{
			id: "ania",
			url: ania,
			poster: aniaPoster,
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
			poster: yorPoster,
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
			poster: loidPoster,
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
			poster: violetPoster,
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
			poster: okarinPoster,
			// photo edit properties
			color: "text-white",
			brightness: "brightness-100 ",
			contrast: "contrast-100",
		},

		{
			id: "rem",
			url: rem,
			tagLine: "Demonically Inspired",
			poster: remPoster,
			// photo edit properties
			color: "text-cyan-300",
			brightness: "brightness-100 ",
			contrast: "contrast-100",
		},
	];
	return charactersArr;
}

export default lightCharacters;
