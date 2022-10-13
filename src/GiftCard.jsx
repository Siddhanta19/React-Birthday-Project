import React from "react";
import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Box,
} from "@chakra-ui/react";

// importing characters data
import darkCharacters from "./CharactersData/darkCharactersData";
import lightCharacters from "./CharactersData/lightCharactersData";

// importing darkCard & lightCard component
import DarkCard from "./DarkCard";
import LightCard from "./LightCard";

// importing music
import lightMusic from "./Music/The Voice in My Heart.mp3";
import darkMusic from "./Music/Death.mp3";

function GiftCard() {
	return (
		<Box>
			<Tabs
				defaultIndex={2}
				isFitted
				isLazy
				variant={"soft-rounded"}
				fontFamily={"Poppins, sans-serif"}
			>
				<TabList
					display={"flex"}
					flexDirection={{ base: "column", md: "row" }}
					gap={{ base: "4", md: "8" }}
				>
					<Tab
						className="tracking-widest rounded-xl bg-black font-bold cursor-pointer"
						fontSize={{ base: "2xl", md: "3xl" }}
						_selected={{
							color: "black",
							fontSize: "2xl",
							bg: "red.600",
							fontWeight: "bold",
						}}
						_hover={{ md: { color: "white", bg: "gray.800" } }}
					>
						Dark Mode
					</Tab>
					{/* <center p={4}>
						<Divider bgColor={"black"} orientation="vertical" />
					</center> */}

					<Tab
						className="tracking-widest rounded-xl bg-black text-cyan-100 font-bold cursor-pointer"
						fontSize={{ base: "2xl", md: "3xl" }}
						_selected={{
							color: "gray.200",
							fontSize: "2xl",
							bg: "red.600",
							fontWeight: "bold",
						}}
						_hover={{ md: { color: "black", bg: "gray.400" } }}
					>
						Light Mode
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel p={0} py={5}>
						<audio src={darkMusic} autoPlay></audio>
						<DarkCard charactersData={darkCharacters()} />
					</TabPanel>
					<TabPanel p={0} py={5}>
						<audio src={lightMusic} autoPlay></audio>
						<LightCard charactersData={lightCharacters()} />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
}

export default GiftCard;
