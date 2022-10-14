// importing images

import yorForger from "../assets/Spy Family/yorDark.mp4";
import yorPoster from "../assets/Spy Family/yor.jpg";
// import anyaForger from "./assets/Spy Family/anya.jpg";
import loidForger from "../assets/Spy Family/loidDark.mp4";
import loidPoster from "../assets/Spy Family/loidDark.jpg";

import echidna from "../assets/Re;0/echidnaDark.mp4";
import echidnaPoster from "../assets/Re;0/echidna.webp";

import subaru from "../assets/Re;0/subaruDark.mp4";
import subaruPoster from "../assets/Re;0/subaru.jpg";

import rem from "../assets/Re;0/remDark.mp4";
import remPoster from "../assets/Re;0/remDark_Moment.jpg";

import okarin from "../assets/Steins;Gate/okarinDark.mp4";
import okarinPoster from "../assets/Steins;Gate/okarinDark_Moment.jpg";

import light from "../assets/Death Note/light.mp4";
import lightPoster from "../assets/Death Note/lightDark.jpg";

function darkCharacters() {
	const charactersArr = [
		// Re;

		{
			id: "echidna",
			url: echidna,
			tagLine: "Witch of Greed",
			poster: echidnaPoster,
			// photo edit properties
			color: "text-slate-300",
			brightness: "brightness-120 ",
			contrast: "contrast-100",
		},

		{
			id: "light",
			url: light,
			tagLine: "The Kira",
			poster: lightPoster,
			// photo edit properties
			color: "text-red-400",
			brightness: "brightness-120 ",
			contrast: "contrast-100",
		},

		// Spy X Family

		{
			id: "yor",
			url: yorForger,
			tagLine: "Thorn Princess",
			poster: yorPoster,
			// photo edit properties
			color: "text-red-400",
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
			poster: loidPoster,
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
			poster: subaruPoster,
			// photo edit properties
			color: "text-orange-400",
			// brightness: "brightness-90 ",
			// contrast: "contrast-90",
		},
		{
			id: "rem",
			url: rem,
			tagLine: "Demonically Inspired",
			poster: remPoster,
			// photo edit properties
			color: "text-cyan-300",
			brightness: "brightness-125 ",
			contrast: "contrast-100",
		},
		{
			id: "okarin",
			url: okarin,
			tagLine: "Mad Scientist",
			poster: okarinPoster,
			// photo edit properties
			color: "text-green-400",
			brightness: "brightness-100 ",
			contrast: "contrast-100",
		},
	];
	return charactersArr;
}

export default darkCharacters;
