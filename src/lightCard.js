import React from "react";

function LightCard(props) {
	const charactersData = props.charactersData;
	const charactersComponents = charactersData.map((character) => (
		<div
			key={character.id}
			id="character-cards"
			className="bg-cyan-200 rounded-3xl shadow-md transition-all duration-500"
		>
			<img
				src={character.url}
				alt=""
				className={
					"rounded-t-2xl duration-300 " +
					character.brightness +
					character.contrast
				}
			/>

			<h2
				className={
					"text-3xl text-center capitalize tracking-widest font-bold underline underline-offset-4 p-5 " +
					character.color
				}
			>
				{character.tagLine}
			</h2>
			<br />
		</div>
	));
	return (
		<div
			id="LightCard"
			className="flex flex-col bg-yellow-200 justify-center items-center p-10 space-y-5 rounded-3xl shadow-zinc-800 shadow-lg"
		>
			{charactersComponents}
		</div>
	);
}

export default LightCard;
