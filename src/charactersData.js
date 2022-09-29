import React from "react";

// importing images

import yorForger from "./assets/Spy Family/yor.png";
import anyaForger from "./assets/Spy Family/anya.jpg";
import loidForger from "./assets/Spy Family/loid.jpeg";
import echidna from "./assets/Re;0/echidna.webp";
import subaru from "./assets/Re;0/subaru.jpg";

function characters() {
	const charactersArr = [
		// Spy X Family
		{
			id: "yor",
			url: yorForger,
			tagLine: "Thorn Princess",
			// photo edit properties
			color: "text-red-600",
			brightness: "brightness-125 ",
		},
		{
			id: "anya",
			url: anyaForger,
			tagLine: "Anya Likes Peanut",
			// photo edit properties
			color: "text-red-200",
			brightness: "brightness-90 ",
		},

		{
			id: "loid",
			url: loidForger,
			tagLine: "Twilight",
			// photo edit properties
			color: "text-green-400",
			brightness: "brightness-95 ",
			contrast: "contrast-90",
		},
		// =====================================

		// Re;0

		{
			id: "echidna",
			url: echidna,
			tagLine: "Witch of Greed",
			// photo edit properties
			color: "text-slate-300",
			brightness: "brightness-100 ",
			contrast: "contrast-90",
		},

		{
			id: "subaru",
			url: subaru,
			tagLine: "Suffaru",
			// photo edit properties
			color: "text-orange-400",
			brightness: "brightness-90 ",
			contrast: "contrast-90",
		},
	];
	return charactersArr;
}

export default characters;
