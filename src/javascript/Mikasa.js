import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Mikasa
{
    constructor()
    {
        this.group = new THREE.Group()

        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('./draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        gltfLoader.load(
            './models/mikasa-ball/scene.glb',
            (_gltf) =>
            {
                this.mikasa = _gltf.scene.children[0]
                this.mikasa.scale.set(5, 5, 5)
                this.group.add(this.mikasa)
            }
        )
    }
}
