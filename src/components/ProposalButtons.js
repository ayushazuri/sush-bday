import "./ProposalButtons.css";

import React, { useEffect, useRef, useState } from "react";

import RunawayButton from "./RunawayButton";

function ProposalButtons() {
	const noBtnRef = useRef(null);
	const [showBox, setShowBox] = useState(false);
	const [noStyle, setNoStyle] = useState({
		top: "200px",
		left: "calc(50% + 100px)",
	});

	useEffect(() => {
		const handleMouseMove = (e) => {
			if (!noBtnRef.current || showBox) return;

			const rect = noBtnRef.current.getBoundingClientRect();
			const dx = e.clientX - (rect.left + rect.width / 2);
			const dy = e.clientY - (rect.top + rect.height / 2);
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance < 150) {
				let newLeft = rect.left + (dx > 0 ? 200 : -200);
				let newTop = rect.top + (dy > 0 ? 150 : -150);

				const maxLeft = window.innerWidth - rect.width;
				const maxTop = window.innerHeight - rect.height;

				newLeft = Math.max(0, Math.min(maxLeft, newLeft));
				newTop = Math.max(0, Math.min(maxTop, newTop));

				setNoStyle({ top: `${newTop}px`, left: `${newLeft}px` });
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [showBox]);

	return (
		<div className="button-wrapper">
			<div className="button-row">
				<button className="yesBtn" onClick={() => setShowBox(true)}>
					Yes
				</button>
				{!showBox && <RunawayButton />}
			</div>

			{showBox && (
				<div className="love-box">
					<button className="close-btn" onClick={() => setShowBox(false)}>
						×
					</button>
					<h2>💖 Yayyy!!! 💖</h2>
					<p>
						I will never let you go my TishPie, I love you a lot. Without you,
						life isn’t really living — it’s just surviving. Come back to me
						ASAP💑
					</p>
					<img
						src={`${process.env.PUBLIC_URL}/assets/images/image_us.jpeg`}
						alt="us"
						style={{
							maxWidth: "50%",
							maxHeight: "70%",
							objectFit: "contain",
							borderRadius: "10px",
						}}
					/>
				</div>
			)}
		</div>
	);
}

export default ProposalButtons;
