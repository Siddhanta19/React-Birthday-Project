import React from "react";
import { useSpring, animated } from "@react-spring/web";

function DarkCard(props) {
	const charactersData = props.charactersData;

	const opacityAnimation = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		// config: {duration: "1500"}
	});
	const charactersComponents = charactersData.map((character) => (
		<div
			key={character.id}
			id="character-cards"
			style={opacityAnimation}
			className="flex flex-col items-center justify-center bg-zinc-800 rounded-3xl shadow-md transition-all"
		>
			<video
				src={character.url}
				muted={true}
				autoPlay={true}
				loop
				poster={character.poster}
				// srcSet={`${imageSmall} 320w, ${imageMedium} 680w, ${imageLarge}   960w, ${imageXLarge} 1980w`}
				alt=""
				className={
					"rounded-t-2xl duration-300 " +
					character.brightness +
					character.contrast
				}
			/>
			{/* <img
				src={character.url}
				// srcSet={`${imageSmall} 320w, ${imageMedium} 680w, ${imageLarge}   960w, ${imageXLarge} 1980w`}
				alt=""
				className={
					"rounded-t-2xl duration-300 " +
					character.brightness +
					character.contrast
				}
			/> */}

			<h2
				className={
					"text-4xl capitalize tracking-widest text-center font-bold pt-5 " +
					character.color
				}
			>
				{character.tagLine}
			</h2>
			<br />
		</div>
	));
	return (
		<animated.div
			style={opacityAnimation}
			id="darkCard"
			className="flex flex-wrap bg-black justify-center items-center p-5 sm:p-10 space-y-8 rounded-3xl shadow-slate-900 shadow-lg duration-700"
		>
			{charactersComponents}
		</animated.div>
	);
}

export default DarkCard;
