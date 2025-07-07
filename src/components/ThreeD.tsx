import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

function ThreeD() {
  const [canvasSize, setCanvasSize] = useState({
    width: "100%",
    height: "100%",
  });

  useEffect(() => {
    function updateCanvasSize() {
      const w = window.innerWidth;
      let width: string;
      let height: string;

      if (w < 640) {
        width = "350px";
        height = "350px";
      } else if (w < 768) {
        width = "400px";
        height = "400px";
      } else if (w < 1024) {
        width = "500px";
        height = "500px";
      } else if (w < 1280) {
        width = "600px";
        height = "600px";
      } else {
        width = "700px";
        height = "700px";
      }

      setCanvasSize({ width, height });
    }

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, []);

  // Responsive container, fills parent
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Canvas
        className="z-10"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
        style={{ width: canvasSize.width, height: canvasSize.height }}
      >
        <Suspense fallback={null}>
          <Geometries />
          <ResponsiveShadows />
          <Environment preset="sunset" />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

function ResponsiveShadows() {
  const [shadowParams, setShadowParams] = useState({
    position: [0, -3.2, 0] as [number, number, number],
    opacity: 0.65,
    scale: 40,
    blur: 1.5,
    far: 9,
  });

  useEffect(() => {
    function updateShadowParams() {
      const w = window.innerWidth;
      let position: [number, number, number];
      let opacity: number;
      let scale: number;
      let blur: number;
      let far: number;

      if (w < 640) {
        position = [0, -2.5, 0];
        opacity = 0.65;
        scale = 40;
        blur = 1.5;
        far = 9;
      } else if (w < 768) {
        position = [0, -3.4, 0];
        opacity = 0.65;
        scale = 40;
        blur = 1.5;
        far = 9;
      } else if (w < 1024) {
        position = [0, -3.2, 0];
        opacity = 0.65;
        scale = 40;
        blur = 1.5;
        far = 9;
      } else if (w < 1280) {
        position = [0, -3.2, 0];
        opacity = 0.65;
        scale = 40;
        blur = 1.5;
        far = 9;
      } else {
        position = [0, -3.2, 0];
        opacity = 0.65;
        scale = 40;
        blur = 1.5;
        far = 9;
      }

      setShadowParams({ position, opacity, scale, blur, far });
    }

    updateShadowParams();
    window.addEventListener("resize", updateShadowParams);
    return () => window.removeEventListener("resize", updateShadowParams);
  }, []);

  return (
    <ContactShadows
      position={shadowParams.position}
      opacity={shadowParams.opacity}
      scale={shadowParams.scale}
      blur={shadowParams.blur}
      far={shadowParams.far}
    />
  );
}

export default ThreeD;

function Geometries() {
  // Responsive geometry parameters
  const [params, setParams] = useState({
    positionX: 1.2,
    positionY: 1.2,
    scaleX: 1.5,
    scaleY: 0.15,
  });

  useEffect(() => {
    function updateParams() {
      let scaleX = 1.5;
      let scaleY = 0.15;
      let positionX = 1.2;
      let positionY = 1.2;
      const w = window.innerWidth;
      if (w < 640) {
        scaleX = 2;
        scaleY = 0.15;
        positionX = 0;
        positionY = 1.8;
      } else if (w < 768) {
        scaleX = 2;
        scaleY = 0.15;
        positionX = 0;
        positionY = 1.8;
      } else if (w < 1024) {
        scaleX = 1.5;
        scaleY = 0.13;
        positionX = 0;
        positionY = 1.4;
      } else if (w < 1280) {
        scaleX = 1.5;
        scaleY = 0.13;
        positionX = 0;
        positionY = 1.4;
      } else {
        scaleX = 1.8;
        scaleY = 0.15;
        positionX = 0;
        positionY = 1.4;
      }
      setParams({ scaleX, scaleY, positionX, positionY });
    }
    updateParams();
    window.addEventListener("resize", updateParams);
    return () => window.removeEventListener("resize", updateParams);
  }, []);

  const geometries = [
    {
      position: [params.positionX, params.positionY, 0],
      r: 0.3,
      geometry: new THREE.TorusGeometry(params.scaleX, params.scaleY, 15, 91),
    },
  ];

  const materials = [new THREE.MeshNormalMaterial()];

  return geometries.map(({ position, r, geometry }) => (
    <Geometry
      key={JSON.stringify(position)}
      position={position.map((p) => (typeof p === "number" ? p * 2 : p))}
      geometry={geometry}
      materials={materials}
      r={r}
    />
  ));
}

interface GeometryProps {
  r: number;
  position: number[];
  geometry: THREE.BufferGeometry;
  materials: THREE.Material[];
}

function Geometry({ r, position, geometry, materials }: GeometryProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [visible, setVisible] = useState(false);
  const [startingMaterial] = useState(() => getRandomMaterial());

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  useEffect(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = -Math.PI / 2;
    let ctx = gsap.context(() => {
      setVisible(true);
      gsap.from(meshRef.current!.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "elastic.out(1,0.3)",
        delay: 0.3,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <group position={position as [number, number, number]} ref={meshRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          visible={visible}
          material={startingMaterial}
        ></mesh>
      </Float>
    </group>
  );
}

function Model() {
  const { scene } = useThree();
  const meshRef = useRef<THREE.Group | null>(null);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth });

  // Responsive update on resize
  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load and manage mesh
  useEffect(() => {
    let mesh: THREE.Group | null = null;
    const loader = new GLTFLoader().setPath("/cat_arun/");
    loader.load(
      "scene.gltf",
      (gltf: GLTF) => {
        // Remove previous mesh if exists
        if (meshRef.current) {
          scene.remove(meshRef.current);
        }
        mesh = gltf.scene;
        if (mesh) {
          mesh.traverse((child: any) => {
            if (child.isMesh) {
              child.castShadow = false;
              child.receiveShadow = false;
              const textureLoader = new THREE.TextureLoader();
              const texture = textureLoader.load(
                "/cat_arun/textures/wire_115115115_baseColor.png"
              );
              texture.colorSpace = THREE.SRGBColorSpace;
              texture.flipY = false;
              const material = new THREE.MeshBasicMaterial({ map: texture });
              child.material = material;
            }
          });
          // Responsive position/scale
          const w = window.innerWidth;
          if (w < 640) {
            mesh.position.set(0, 0.8, -1);
            mesh.scale.setScalar(0.095);
          } else if (w < 768) {
            mesh.position.set(0, 0.8, -1);
            mesh.scale.setScalar(0.095);
          } else if (w < 1024) {
            //done
            mesh.position.set(0, 0.4, -1);
            mesh.scale.setScalar(0.07);
          } else if (w < 1280) {
            //done
            mesh.position.set(0, 0.4, -1);
            mesh.scale.setScalar(0.07);
          } else {
            //done
            mesh.position.set(0, 0.4, -1);
            mesh.scale.setScalar(0.083);
          }
          mesh.rotation.y = -Math.PI / 2;
          scene.add(mesh);
          meshRef.current = mesh;
        }
      },
      undefined,
      (error: unknown) => {
        console.error(error);
      }
    );
    return () => {
      if (meshRef.current) {
        scene.remove(meshRef.current);
        meshRef.current = null;
      }
      if (mesh) {
        scene.remove(mesh);
      }
    };
  }, [scene, windowSize.width]);

  // Mouse rotation
  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      if (!meshRef.current) return;
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const mouseX = (clientX / innerWidth) * 2 - 1;
      const mouseY = -(clientY / innerHeight) * 2 + 1;
      const rotationSpeed = 0.2;
      const targetRotationX = (-(mouseY * Math.PI) / 2) * rotationSpeed;
      const yRotationOffset = 0;
      const targetRotationY =
        mouseX * Math.PI * rotationSpeed - Math.PI * 0.6 + yRotationOffset;
      gsap.to(meshRef.current.rotation, {
        x: targetRotationX,
        y: targetRotationY,
        duration: 0.5,
        ease: "power3.out",
      });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
