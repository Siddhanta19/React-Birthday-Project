// importing React
import React, { useState } from "react";
import { Divider } from "@chakra-ui/react";

// image imports
import birthdayBoy from "./assets/Subhranil.jpg";

import GiftCard from "./GiftCard";

// importing animation
import { useSpring, animated } from "@react-spring/web";

// importing radio button components
/* import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { grey } from "@mui/material/colors"; */

function Main(props) {
	// Props for Birthday Data
	const { infoData } = props;

	/* const [value, setValue] = useState("");

	const handleChange = (event) => {
		setValue(event.target.value);
	}; */

	const opacityAnimation = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		// config: {duration: "1500"}
	});

	return (
		<>
			<animated.div
				id="topWish"
				style={opacityAnimation}
				className="relative flex flex-col bg-purple-700 justify-center items-center p-5 sm:p-10 space-y-5 rounded-3xl shadow-purple-900 shadow-md duration-700"
			>
				{/* <h1 className="screen font-bold tracking-wider text-white"></h1> */}

				<animated.img
					style={opacityAnimation}
					className="rounded-2xl brightness-95 duration-1000"
					src={birthdayBoy}
					alt=""
				></animated.img>

				<animated.h1
					// style={opacityAnimation}
					className="text-white text-center text-4xl sm:text-5xl tracking-widest font-Ubuntu font-bold capitalize"
				>
					Happy Birthday
				</animated.h1>

				<Divider />

				<div id="tagline" className="rounded-3xl transition-all duration-500">
					<h2 className="text-cyan-100 text-2xl sm:text-3xl text-center tracking-wide md:tracking-wider font-semibold">
						I can, I shall and I must because, I am The
						<span className="font-bold"> EINSTEIN</span>
					</h2>
				</div>

				<Divider />

				{/* <p className="text-white text-xl font-medium tracking-wide capitalize">
				 /* : */}

				{/* Radio Button */}
				{/* <FormControl>
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
								<span className="text-black text-2xl sm:text-4xl font-Poppins tracking-wider">
									Dark Mode
								</span>
							}
						/>
						<FormControlLabel
							value="Light Mode"
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
								<span className="text-white text-2xl sm:text-4xl font-bold tracking-wider">
									Light Mode
								</span>
							}
						/>
					</RadioGroup>
				</FormControl> */}
			</animated.div>
			<GiftCard />
			{/* Rendering Dark Card below the purple card */}
			{/* {value === "Dark Mode" && (
				<>
					<audio src={darkMusic} autoPlay></audio>
					<DarkCard charactersData={darkCharacters()} />
				</>
			)}
			{value === "Light Mode" && (
				<>
					<audio src={lightMusic} autoPlay></audio>
					<LightCard charactersData={lightCharacters()} />
				</>
			)} */}
		</>
	);
}

export default Main;
