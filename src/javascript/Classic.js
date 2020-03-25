import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Classic
{
    constructor()
    {
        this.group = new THREE.Group()

        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        gltfLoader.load(
            '/models/classic-ball/scene.gltf',
            (_gltf) =>
            {
                this.classic = _gltf.scene.children[0]
                this.classic.scale.set(0.1, 0.1, 0.1)
                this.group.add(this.classic)
            }
        )
    }
}