import React, { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { useKeyPress } from "../../hooks/useKeyPress";
import data from "../../../public/assets/data.json";
import soundSpace from "../../../public/assets/space.mp3"

import classes from "./styles.module.scss";

const Destination: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const containerRef = useRef<any | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  const handleLinkClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useKeyPress(setActiveIndex, ["ArrowRight", "ArrowLeft"]);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { clientWidth, clientHeight } = container;

    rendererRef.current = new THREE.WebGLRenderer();
    rendererRef.current.setClearColor(0xffffff, 0);

    container.appendChild(rendererRef.current.domElement);
    rendererRef.current.setSize(clientWidth, clientHeight);

    // Scene initialization
    const scene = new THREE.Scene();

    // Camera initialization
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);

    // Global light
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    // Planet setup
    const planetTexture = new THREE.TextureLoader().load(data.destinations[activeIndex].images.horizontal);
    // const planetTexture = new THREE.TextureLoader().load(test);

    const planet = new THREE.Mesh(
      new THREE.SphereGeometry(1.4, 64, 64),
      new THREE.MeshStandardMaterial({ map: planetTexture })
    );

    planet.position.z = -3;
    scene.add(planet);

    // Animation
    function animate() {
      requestAnimationFrame(animate);
      planet.rotation.y += 0.003;
      planet.rotation.x += 0.002;
      planet.rotation.z += 0.002;
      rendererRef.current?.render(scene, camera);
    }

    animate();
    
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(rendererRef.current?.domElement);
      }
    }

  }, [activeIndex])

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
        <>
          <span>01</span> pick your destination
          {console.log('RENDER')}
        </>
      </h2>
      <div className={classes.changingContent}>
        <div className={classes.imageContainer} ref={containerRef}>
          {/* <img src={data.destinations[activeIndex].images.png} alt=""  /> */}
        </div>
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
export default React.memo(Destination);
