import * as THREE from 'three'

export function loadFXLModel(
    scene,
    glbPath,
    options = { receiveShadow: true, castShadow: true }
) {
    const { receiveShadow, castShadow } = options
    var mixer, clock

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




                obj.traverse(function (child) {
                    if (child.isMesh) {
                        child.castShadow = castShadow
                        child.receiveShadow = receiveShadow
                    }
                })
                resolve(obj)
            },
            undefined,
            function (error) {
                reject(error)
            }
        )
    })
}