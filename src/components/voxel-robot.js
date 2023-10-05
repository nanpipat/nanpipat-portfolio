import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { RobotSpinner, RobotContainer } from './voxel-robot-loader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}



const VoxelDog = () => {
  var mixer
  let tt = 0
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(-0.5, 2.5, 0))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  )
  const [scene] = useState(new THREE.Scene())
  // const [mixer] = useState(new THREE.AnimationMixer)
  const [clock] = useState(new THREE.Clock())
  const [_controls, setControls] = useState()

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputColorSpace = THREE.SRGBColorSpace
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.001 + 3.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      // const dirLight = new THREE.DirectionalLight(0xffffff, 1)
      // dirLight.castShadow = true
      // dirLight.shadow.camera.near = 1;
      // dirLight.shadow.camera.far = 400000000;
      // //dirLight.shadow.camera.visible = true;
  
      // scene.add(dirLight);
      // scene.add(new THREE.DirectionalLightHelper(dirLight, 10));

      const ambientLight = new THREE.AmbientLight(0xcccccc, 5)
      scene.add(ambientLight)

      // const light = new THREE.PointLight(0xffffff, 1, 100);
      // light.position.set(0, 10, 4);
      // light.castShadow = true; // default false
      // scene.add(light);

     


      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.maxZoom = 1.5
      controls.target = target
      setControls(controls)

      const loader = new GLTFLoader()

      let req = null

      // setLoading(false)
      loader.load(
        '/untitled.gltf',
        (gltf) => {
          var model = gltf.scene;
          var animations = gltf.animations;

          model.name = 'man'
          model.receiveShadow = true
          model.castShadow = true

          scene.add(model);

          mixer = new THREE.AnimationMixer(model);

          var action = mixer.clipAction(animations[0]); // access first animation clip
          action.play();

          model.traverse(function (child) {
                if (child.isMesh) {
                    child.castShadow = true
                    child.receiveShadow = true
                }
            })
        },
        (xhr) => {
          // console.log(xhr, xhr.loaded, xhr.total, (xhr.loaded / xhr.total) * 100 + '% loaded')
          if (req !== null) {
            // console.log('cancelAnimationFrame', req)
            cancelAnimationFrame(req)  
          }
          setLoading(false)
          animate()
        },
        (error) => {
          console.log(error)
        }
      )

      // loadGLTFModel(scene,mixer, '/untitled.gltf', {
      //   receiveShadow: false,
      //   castShadow: false
      // }).then(() => {
      //   animate()
      //   animate2()
      //   setLoading(false)
      // })

      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 10

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        var delta = clock.getDelta(); // clock is an instance of THREE.Clock

        if ( mixer ) mixer.update( delta );

        renderer.render(scene, camera)
      }

      return () => {
        console.log('unmount')
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  return (
    <RobotContainer ref={refContainer}>{loading && <RobotSpinner />}</RobotContainer>
  )
}

export default VoxelDog