import React, { useEffect, useRef, useState } from "react";

function RunawayButton() {
	const btnRef = useRef(null);
	const [style, setStyle] = useState({ top: "230px", left: "61%" });

	useEffect(() => {
		const handleMouseMove = (e) => {
			if (!btnRef.current) return;

			const rect = btnRef.current.getBoundingClientRect();
			const dx = e.clientX - (rect.left + rect.width / 2);
			const dy = e.clientY - (rect.top + rect.height / 2);
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance < 100) {
				let newLeft = rect.left + (dx > 0 ? 120 : -120);
				let newTop = rect.top + (dy > 0 ? 100 : -100);

				// Constrain to window
				const maxLeft = window.innerWidth - rect.width;
				const maxTop = window.innerHeight - rect.height;

				newLeft = Math.max(0, Math.min(maxLeft, newLeft));
				newTop = Math.max(0, Math.min(maxTop, newTop));

				setStyle({ top: `${newTop}px`, left: `${newLeft}px` });
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<button
			ref={btnRef}
			style={{
				position: "fixed",
				...style,
				transition: "top 0.2s ease, left 0.2s ease",
				padding: "15px 30px",
				borderRadius: "30px",
				fontSize: "18px",
				backgroundColor: "#ff4757",
				color: "#fff",
				border: "none",
				cursor: "pointer",
				zIndex: 1000,
			}}
			onClick={(e) => e.preventDefault()}
		>
			No
		</button>
	);
}

export default RunawayButton;
