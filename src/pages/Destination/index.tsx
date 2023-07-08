import React, { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { useKeyPress } from "../../hooks/useKeyPress";
import data from "../../../public/assets/data.json";
import soundSpace from "../../../public/assets/space.mp3"

import classes from "./styles.module.scss";
import { useResize } from "../../hooks/useResize";

const Destination: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isTablet, setTablet] = useState<boolean>(false);
  const [isMobile, setMobile] = useState<boolean>(false);

  const containerRef = useRef<any | null>(null);

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
    const camera = new THREE.PerspectiveCamera(60, canvasWidth / canvasHeight, 0.1, 1000);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    const planetTexture = new THREE.TextureLoader().load(data.destinations[activeIndex].images.horizontal);

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
    }
  }, [activeIndex, isTablet, isMobile]);


  useEffect(() => {
    const container = containerRef.current;

    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);

    // create an AudioListener and add it to the camera----------------------
    const listener = new THREE.AudioListener();
    camera.add(listener);

    // create a global audio source
    const sound = new THREE.Audio(listener);

    // load a sound and set it as the Audio object's buffer---------------------
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load(soundSpace, (buffer) => {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);
      sound.play();
    });
    return () => {
      sound.pause();
    }
  }, [])

  return (
    <div className={classes.content}>
      <h2 className={classes.intro}>
        <span className={classes.introIndex}>01</span> pick your destination
      </h2>
      <div className={classes.changingContent}>
        <div className={classes.imageContainer} ref={containerRef}></div>
        <div className={classes.textContent}>
          <nav className={classes.navbarDestination}>
            <ul className={classes.linksList}>
              {data &&
                data.destinations.map((item, index) => (
                  <li
                    id={`${index}`}
                    key={index}
                    onClick={() => handleLinkClick(index)}
                  >
                    <span>{item.name}</span>
                    {activeIndex === index ? (
                      <div className={classes.activeLink}></div>
                    ) : null}
                    <div className={classes.hovered}></div>
                  </li>
                ))}
            </ul>
          </nav>
          <h1 className={classes.title}>
            {data.destinations[activeIndex].name}
          </h1>
          <p className={classes.text}>
            {data.destinations[activeIndex].description}
          </p>
          <hr />
          <div className={classes.details}>
            <div className={classes.distance}>
              <span>AVG. DISTANCE</span>
              {data.destinations[activeIndex].distance}
            </div>
            <div className={classes.time}>
              <span>Est. travel time</span>
              {data.destinations[activeIndex].travel}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Destination;
