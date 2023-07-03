import React, { useCallback, useRef, useState } from "react";
import * as THREE from 'three';

import data from "../../../public/assets/data.json";

import test from "../../../public/assets/destination/test.png"

import classes from "./styles.module.scss";

const Destination: React.FC = React.memo(() => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredLink, setHoveredLink] = useState<null | number>(null);
  const containerRef = useRef<any | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);


  const handleLinkClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === "ArrowRight") {
      setActiveIndex((prev) => (prev === 3 ? (prev = 0) : ++prev));
    }
  }, [])

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    e.stopPropagation();
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev === 0 ? (prev = 3) : --prev));
      }
    };
  }, [])

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keydown", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydown", handleKeyUp);
    };
  }, [handleKeyUp, handleKeyDown]);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { clientWidth, clientHeight } = container;

    if (!rendererRef.current) {
      rendererRef.current = new THREE.WebGLRenderer();
      rendererRef.current.setClearColor(0xffffff, 0);
      container.appendChild(rendererRef.current.domElement);
      rendererRef.current.setSize(clientWidth, clientHeight);
    }

    // Scene initialization
    const scene = new THREE.Scene();

    // Camera initialization
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);

    // Global light
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    // Planet setup
    // const planetTexture = new THREE.TextureLoader().load(data.destinations[activeIndex].images.png);
    const planetTexture = new THREE.TextureLoader().load(test);

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
        rendererRef.current?.dispose();
        rendererRef.current = null;
      }
    }

  }, [activeIndex])

  console.log('RENDER')

  return (
    <div className={classes.content}>
      <h2 className={classes.intro}>
        <span>01</span> pick your destination
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
                    key={index}
                    onClick={() => handleLinkClick(index)}
                    onMouseOver={() => setHoveredLink(index)}
                    onMouseOut={() => setHoveredLink(null)}
                  >
                    <span>{item.name}</span>
                    {activeIndex === index ? (
                      <div className={classes.activeLink}></div>
                    ) : null}
                    {hoveredLink === index ? (
                      <div className={classes.hoveredLink}></div>
                    ) : null}
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
})
export default Destination;
