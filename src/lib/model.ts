import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import * as THREE from 'three'

interface LoadModelOptions {
    receiveShadow?: boolean
    castShadow?: boolean
}

export function loadGLTFModel(
    scene: THREE.Scene,
    mixer: THREE.AnimationMixer | null,
    glbPath: string,
    options: LoadModelOptions = { receiveShadow: true, castShadow: true }
): Promise<THREE.Group> {
    const { receiveShadow = true, castShadow = true } = options
    const clock = new THREE.Clock();

    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()

        loader.load(
            glbPath,
            (gltf) => {
                const obj = gltf.scene

                obj.name = 'dog'
                obj.position.y = 0
                obj.position.x = 0
                obj.receiveShadow = receiveShadow
                obj.castShadow = castShadow

                const animations = gltf.animations

                scene.add(obj)

                mixer = new THREE.AnimationMixer(obj)

                if (animations.length > 0) {
                    const action = mixer.clipAction(animations[0])
                    action.play()
                }

                resolve(obj)
            },
            undefined,
            (error) => {
                reject(error)
            }
        )
    })
}