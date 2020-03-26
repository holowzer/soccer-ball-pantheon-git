import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Allen
{
    constructor()
    {
        this.group = new THREE.Group()

        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        gltfLoader.load(
            './models/vintage-ball/scene.glb',
            (_gltf) =>
            {
                this.allen = _gltf.scene.children[0]
                this.allen.scale.set(0.036, 0.036, 0.036)
                this.group.add(this.allen)
            }
        )
    }
}
