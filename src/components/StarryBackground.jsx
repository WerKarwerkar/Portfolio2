import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const StarryBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, stars, starGeo;

    const init = () => {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0f3b2c);

      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 400;

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      starGeo = new THREE.BufferGeometry();
      const starCount = 6000;
      const positions = new Float32Array(starCount * 3);

      for (let i = 0; i < starCount; i++) {
        positions[i * 3] = Math.random() * 800 - 400;
        positions[i * 3 + 1] = Math.random() * 800 - 400;
        positions[i * 3 + 2] = Math.random() * 800 - 400;
      }

      starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const sprite = new THREE.TextureLoader().load(
        "https://threejs.org/examples/textures/sprites/disc.png"
      );
      const starMaterial = new THREE.PointsMaterial({
        color: 0x61d5ae,
        size: 1,
        map: sprite,
        blending: THREE.AdditiveBlending,
        transparent: true,
      });

      stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);

      animate();
    };

    const animate = () => {
      const positions = starGeo.attributes.position.array;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] += 0.5;
        if (positions[i + 2] > 400) {
          positions[i + 2] = -400;
        }
      }

      starGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    init();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ position: "fixed" }}
    ></div>
  );
};

export default StarryBackground;
