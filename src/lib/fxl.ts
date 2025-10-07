import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

interface LoadModelOptions {
    receiveShadow?: boolean
    castShadow?: boolean
}

export function loadFXLModel(
    scene: THREE.Scene,
    glbPath: string,
    options: LoadModelOptions = { receiveShadow: true, castShadow: true }
): Promise<THREE.Group> {
    const { receiveShadow = true, castShadow = true } = options
    let mixer: THREE.AnimationMixer
    let clock: THREE.Clock

    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()

        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene

                obj.name = 'dog'
                obj.position.y = 0
                obj.position.x = 0
                obj.receiveShadow = receiveShadow
                obj.castShadow = castShadow

                //Playing Animation
                mixer = new THREE.AnimationMixer(obj);
                gltf.animations.forEach((clip) => {
                    mixer.clipAction(clip).play();
                })

                clock = new THREE.Clock();

                if (mixer !== undefined) {
                    mixer.update(clock.getDelta())
                }

                scene.add(obj)




                obj.traverse((child) => {
                    if ((child as THREE.Mesh).isMesh) {
                        child.castShadow = castShadow
                        child.receiveShadow = receiveShadow
                    }
                })
                resolve(obj)
            },
            undefined,
            (error) => {
                reject(error)
            }
        )
    })
}