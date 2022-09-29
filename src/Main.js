// importing React
import React, { useState } from "react";
// importing darkCard.js & lightCard.js component
import DarkCard from "./darkCard";
import LightCard from "./lightCard";
// image imports
import soumojit from "./assets/soumojit.jpg";

// importing animation
import { useSpring, animated } from "@react-spring/web";

// importing radio button components
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { grey } from "@mui/material/colors";

// importing characters component with data
import characters from "./charactersData";

function Main(props) {
	// Props for Birthday Data
	const { infoData } = props;

	const [value, setValue] = React.useState("Dark Mode");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const opacityAnimation = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
	});

	return (
		<>
			<div
				id="topWish"
				className="relative flex flex-col bg-purple-700 justify-center items-center px-10 py-4 space-y-5 rounded-3xl shadow-purple-700"
			>
				{/* <h1 className="screen font-bold tracking-wider text-white"></h1> */}

				<animated.img
					style={opacityAnimation}
					className="rounded-2xl duration-300 brightness-95"
					src={soumojit}
					alt=""
				></animated.img>

				<animated.h1
					style={opacityAnimation}
					className="text-white text-4xl tracking-widest font-semibold capitalize duration-300"
				>
					Happy Birthday
				</animated.h1>

				<div id="tagline" className="rounded-3xl transition-all duration-500">
					<h2 className="text-cyan-100 text-2xl text-center tracking-wide capitalize md:tracking-wider font-semibold">
						{infoData.tagLine}
					</h2>
				</div>

				<div id="divide" className="bg-purple-400 w-full h-1"></div>

				{/* <p className="text-white text-xl font-medium tracking-wide capitalize">
				 /* : */}

				{/* Radio Button */}
				<FormControl>
					<RadioGroup
						row
						aria-labelledby="demo-controlled-radio-buttons-group"
						name="controlled-radio-buttons-group"
						value={value}
						onChange={handleChange}
					>
						<FormControlLabel
							value="Dark Mode"
							control={
								<Radio
									sx={{
										"& .MuiSvgIcon-root": {
											color: "black",
											fontSize: 38,
										},
										color: grey[50],
										"&.Mui-checked": {
											color: grey[50],
										},
									}}
								/>
							}
							label={
								<span className="text-black text-2xl font-bold tracking-wider">
									Dark Mode
								</span>
							}
						/>
						<FormControlLabel
							value="male"
							control={
								<Radio
									sx={{
										"& .MuiSvgIcon-root": {
											color: "white",
											fontSize: 38,
										},
										color: grey[50],
										"&.Mui-checked": {
											color: grey[50],
										},
									}}
								/>
							}
							label={
								<span className="text-white text-2xl font-bold tracking-wider">
									Light Mode
								</span>
							}
						/>
					</RadioGroup>
				</FormControl>
			</div>
			{/* Rendering Dark Card below the purple card */}
			{value === "Dark Mode" ? (
				<DarkCard charactersData={characters()} />
			) : (
				<LightCard charactersData={characters()} />
			)}
		</>
	);
}

export default Main;
