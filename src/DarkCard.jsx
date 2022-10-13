import React from "react";
import { useSpring, animated } from "@react-spring/web";

function DarkCard(props) {
	const { charactersData } = props;

	const opacityAnimation = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		// config: {duration: "1500"}
	});
	const charactersComponents = charactersData.map((character) => {
		const {
			id: name,
			url: video,
			poster,
			brightness,
			contrast,
			color,
			tagLine: codeName,
		} = character;

		return (
			<div
				key={name}
				id="character-cards"
				style={opacityAnimation}
				className="flex flex-col items-center justify-center bg-zinc-800 rounded-3xl shadow-md transition-all"
			>
				<video
					src={video}
					muted={true}
					autoPlay={true}
					loop
					poster={poster}
					// srcSet={`${imageSmall} 320w, ${imageMedium} 680w, ${imageLarge}   960w, ${imageXLarge} 1980w`}
					alt=""
					className={"rounded-t-2xl duration-300 " + brightness + contrast}
				/>
				{/* <img
				src={url}
				// srcSet={`${imageSmall} 320w, ${imageMedium} 680w, ${imageLarge}   960w, ${imageXLarge} 1980w`}
				alt=""
				className={
					"rounded-t-2xl duration-300 " +
					brightness +
					contrast
				}
			/> */}

				<div className="flex items-center justify-center">
					<h2
						className={
							"text-4xl capitalize tracking-widest text-center font-Poppins font-semibold py-5 " +
							color
						}
					>
						{codeName}
					</h2>
				</div>
			</div>
		);
	});
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
