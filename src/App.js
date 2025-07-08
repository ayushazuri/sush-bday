import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-h5-audio-player/lib/styles.css";

import React, { useEffect, useRef } from "react";

import HeartBackground from "./components/HeartBackground";
import MusicPlayer from "./components/MusicPlayer";
import PhotoCarousel from "./components/PhotoCarousel";
import ProposalButtons from "./components/ProposalButtons";
import { Toast } from "primereact/toast";

function App() {
	const toast = useRef(null);
	const hasShownToast = useRef(false); // 👈 flag to show toast only once

	useEffect(() => {
		if (!hasShownToast.current) {
			toast.current.show({
				severity: "info",
				summary: "💖 Hi CutiePie!",
				detail: "Play the music and feel the page 💌",
				sticky: true,
				life: null,
				closable: true,
			});
			hasShownToast.current = true;
		}
	}, []);
	return (
		<div
			className="App"
			style={{
				backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/background.jpg)`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				minHeight: "100vh",
				width: "100%",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Toast ref={toast} position="bottom-left" className="mr-2" />
			<h1>My CutiePie JPMC, will you be my girlfriend?????</h1>
			<ProposalButtons />
			<PhotoCarousel />
			<MusicPlayer />
			<p className="footer-note">Try clicking NO if you can 👀</p>
		</div>
	);
}

export default App;
