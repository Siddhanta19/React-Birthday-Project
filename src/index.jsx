import React from "react";
import ReactDOM from "react-dom/client";

import "./css/style.css";
import Main from "./Main";

import { ChakraProvider } from "@chakra-ui/react";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

/* const showBrowserWidth = () => {
	const width = window.innerWidth;
	// const height = window.innerHeight;
	const h1 = document.querySelector(".screen");
	h1.innerText = `Width: ${width}px`;
	h1.style.position = `absolute`;
};

window.onload = showBrowserWidth;
window.onresize = showBrowserWidth; */

const birthdayInfo = {
	codeName: "Subhranil",
	// tagLine: `I just keep moving forward until my dreams become ${"reality".toUpperCase()}`,
	tagLine: `I can, I shall, I must, because, I am The EINSTEIN`,
};

root.render(
	<React.StrictMode>
		<ChakraProvider>
			{
				<div
					id="global-container"
					className="min-h-screen bg-zinc-800 p-5 space-y-6"
				>
					<Main infoData={birthdayInfo} />
				</div>
			}
		</ChakraProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
