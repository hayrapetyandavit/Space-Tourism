import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

import { useResize } from "../../hooks/useResize";
import { useKeyPress } from "../../hooks/useKeyPress";

import data from "../../../public/assets/data.json";
import soundSpace from "../../../public/assets/space.mp3";

import View from "./View";

const Destination: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isTablet, setTablet] = useState<boolean>(false);
  const [isMobile, setMobile] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = (index: number) => {
    setActiveIndex(index);
  };

  useKeyPress(setActiveIndex, ["ArrowRight", "ArrowLeft"], 3);

  useResize(1438.98, setTablet);
  useResize(767.98, setMobile);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xffffff, 0);

    container.appendChild(renderer.domElement);
    const canvasWidth = window.innerWidth;
    let canvasHeight = 480;

    if (isTablet && !isMobile) {
      canvasHeight = 300;
    } else if (isMobile) {
      canvasHeight = 170;
    } else {
      canvasHeight = container.clientHeight;
    }
    renderer.setSize(canvasWidth, canvasHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      canvasWidth / canvasHeight,
      0.1,
      1000
    );

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    const planetTexture = new THREE.TextureLoader().load(
      data.destinations[activeIndex].images.horizontal
    );

    const planet = new THREE.Mesh(
      new THREE.SphereGeometry(1.4, 64, 64),
      new THREE.MeshStandardMaterial({ map: planetTexture })
    );

    planet.position.z = -3;
    scene.add(planet);

    function animate() {
      requestAnimationFrame(animate);
      planet.rotation.y += 0.003;
      planet.rotation.x += 0.002;
      planet.rotation.z += 0.002;
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [activeIndex, isTablet, isMobile]);

  useEffect(() => {
    const container = containerRef.current;
    const camera = new THREE.PerspectiveCamera(
      60,
      container!.clientWidth / container!.clientHeight,
      0.1,
      1000
    );
    const listener = new THREE.AudioListener();

    camera.add(listener);

    const sound = new THREE.Audio(listener);

    const audioLoader = new THREE.AudioLoader();
    audioLoader.load(soundSpace, (buffer) => {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);
      sound.play();
    });

    return () => {
      sound.pause();
    };
  }, []);

  return (
    <View
      data={data}
      activeIndex={activeIndex}
      handleLinkClick={handleLinkClick}
      containerRef={containerRef}
    />
  );
};

export default Destination;
