import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RobotSpinner, RobotContainer } from "./voxel-robot-loader";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const easeOutCirc = (x: number): number => {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
};

const VoxelDog = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>();
  const [_camera, setCamera] = useState<THREE.OrthographicCamera>();
  const [target] = useState(new THREE.Vector3(-0.5, 2.5, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  );
  const [scene] = useState(new THREE.Scene());
  const [clock] = useState(new THREE.Clock());
  const [_controls, setControls] = useState<OrbitControls>();

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, [renderer]);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const newRenderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      newRenderer.setPixelRatio(window.devicePixelRatio);
      newRenderer.setSize(scW, scH);
      newRenderer.outputColorSpace = THREE.SRGBColorSpace;
      container.appendChild(newRenderer.domElement);
      setRenderer(newRenderer);

      const scale = scH * 0.001 + 3.8;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 3);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, newRenderer.domElement);
      controls.autoRotate = true;
      controls.maxZoom = 1.5;
      controls.target = target;
      setControls(controls);

      const loader = new GLTFLoader();
      let mixer: THREE.AnimationMixer | null = null;
      let req: number | null = null;
      let animateStarted = false;

      loader.load(
        "/untitled.gltf",
        (gltf) => {
          const model = gltf.scene;
          const animations = gltf.animations;

          model.name = "man";
          model.receiveShadow = true;
          model.castShadow = true;

          scene.add(model);

          mixer = new THREE.AnimationMixer(model);

          if (animations.length > 0) {
            const action = mixer.clipAction(animations[0]);
            action.play();
          }

          model.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          setLoading(false);
          if (!animateStarted) {
            animateStarted = true;
            animate();
          }
        },
        undefined,
        (error) => {
          console.error("Error loading model:", error);
          setLoading(false);
        }
      );

      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 10;

          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        const delta = clock.getDelta();

        if (mixer) mixer.update(delta);

        newRenderer.render(scene, camera);
      };

      return () => {
        if (req !== null) {
          cancelAnimationFrame(req);
        }

        // Clean up Three.js resources
        scene.traverse((object) => {
          if ((object as THREE.Mesh).isMesh) {
            const mesh = object as THREE.Mesh;
            if (mesh.geometry) mesh.geometry.dispose();
            if (mesh.material) {
              if (Array.isArray(mesh.material)) {
                mesh.material.forEach((material) => material.dispose());
              } else {
                mesh.material.dispose();
              }
            }
          }
        });

        // Remove canvas from DOM
        if (container && newRenderer.domElement.parentNode === container) {
          container.removeChild(newRenderer.domElement);
        }

        newRenderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

  return (
    <RobotContainer ref={refContainer}>
      {loading && <RobotSpinner />}
    </RobotContainer>
  );
};

export default VoxelDog;
