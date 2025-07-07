import "./MusicPlayer.css";

import { FaPause, FaPlay } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";

function MusicPlayer() {
	const audioRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const togglePlay = () => {
		const audio = audioRef.current;
		if (!audio) return;

		if (isPlaying) {
			audio.pause();
		} else {
			audio.play().catch(console.error);
		}
		setIsPlaying(!isPlaying);
	};

	useEffect(() => {
		const audio = audioRef.current;
		if (audio) {
			const playAudio = async () => {
				try {
					await audio.play();
					setIsPlaying(true);
				} catch (err) {
					// Autoplay might be blocked; wait for user interaction
					console.warn("Autoplay was blocked:", err.message);
				}
			};

			playAudio();
		}
	}, []);

	return (
		<>
			<audio ref={audioRef} src="assets/images/songs.mp3" loop autoPlay />
			<button className="music-fab" onClick={togglePlay}>
				{isPlaying ? <FaPause /> : <FaPlay />}
			</button>
		</>
	);
}

export default MusicPlayer;
