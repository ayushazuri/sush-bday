import React from "react";
import Slider from "react-slick";

const originalImages = [
	"/assets/images/IMG_3242.jpeg",
	"/assets/images/IMG_3635.jpeg",
	"/assets/images/IMG_4570.jpeg",
	"/assets/images/IMG_4573.jpeg",
	"/assets/images/IMG_5221.jpeg",
	"/assets/images/IMG_8371.jpeg",
	"/assets/images/FullSizeRender.jpeg",
	"/assets/images/auto.jpeg",
	"/assets/images/wed-dadar.jpeg",
];

function PhotoCarousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		arrows: false,
	};

	const shuffleArray = (array) => {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	};

	const images = shuffleArray(originalImages);

	return (
		<div
			style={{
				width: "90%",
				maxWidth: "800px",
				margin: "40px auto",
				borderRadius: "15px",
				overflow: "hidden",
				boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
			}}
		>
			<Slider {...settings}>
				{images.map((src, i) => (
					<div key={i} style={{ width: "100%" }}>
						<div
							style={{
								width: "100%",
								height: "400px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								background: "#fff",
							}}
						>
							<img
								src={src}
								alt={`Slide ${i}`}
								style={{
									maxWidth: "100%",
									maxHeight: "100%",
									objectFit: "contain",
									borderRadius: "10px",
								}}
							/>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default PhotoCarousel;
