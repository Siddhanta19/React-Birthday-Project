import React from "react";
import { useSpring, animated } from "@react-spring/web";

function LightCard(props) {
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
			className="flex flex-col justify-center items-center bg-purple-600 shadow-purple-700 rounded-3xl shadow-md transition-all duration-500"
		>
			<video
				src={character.url}
				muted={true}
				autoPlay={true}
				loop
				// srcSet={`${imageSmall} 320w, ${imageMedium} 680w, ${imageLarge}   960w, ${imageXLarge} 1980w`}
				alt=""
				className={
					"rounded-t-2xl duration-300 " +
					character.brightness +
					character.contrast
				}
			/>

			<h2
				className={
					"text-3xl text-center capitalize tracking-widest font-bold pt-5 " +
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
			id="LightCard"
			style={opacityAnimation}
			className="flex flex-col bg-cyan-500 justify-center items-center p-5 sm:p-10 space-y-8 rounded-3xl shadow-cyan-600 shadow-lg duration-700"
		>
			{charactersComponents}
		</animated.div>
	);
}

export default LightCard;
