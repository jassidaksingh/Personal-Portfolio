import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useTheme } from "../ThemeProvider";

// import CanvasLoader from "../Loader";
useGLTF.preload("/scene.glb");

const Computers = ({ isMobile }) => {
  const { isDarkMode } = useTheme();
  const computer = useGLTF("/scene.glb");

  return (
    <mesh>
      <hemisphereLight intensity={isDarkMode ? 2 : 1.5} groundColor={isDarkMode ? 'black' : '#ffffff'} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.5}
        penumbra={1}
        intensity={isDarkMode ? 2 : 1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={isDarkMode ? 2 : 1.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.3 : 0.3}
        position={isMobile ? [0, -3, -2.2] : [0, -3, 1]}
        rotation={[0, 1.2, 0]}
      />
      <ambientLight intensity={isDarkMode ? 2 : 1.5} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <Suspense fallback={<CanvasLoader />}> */}
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;