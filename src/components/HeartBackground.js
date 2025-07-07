import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function HeartBackground() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#fff0f5" },
        particles: {
          number: { value: 40 },
          shape: {
            type: 'image',
            image: [
              { src: 'https://i.imgur.com/6bbv5Lk.png', width: 20, height: 20 },
              { src: 'https://i.imgur.com/Ega9qYf.png', width: 20, height: 20 },
            ],
          },
          size: { value: { min: 15, max: 25 } },
          opacity: { value: 0.5 },
          move: {
            enable: true,
            speed: 1,
            direction: 'bottom',
            outModes: { default: 'out' },
          },
        },
      }}
    />
  );
}

export default HeartBackground;
