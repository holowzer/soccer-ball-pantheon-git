import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Jabulani
{
    constructor()
    {
        this.group = new THREE.Group()

        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        gltfLoader.load(
            '/models/jabulani-ball/scene.gltf',
            (_gltf) =>
            {
                this.jabulani = _gltf.scene.children[0]
                this.jabulani.scale.set(0.55, 0.55, 0.55)
                this.group.add(this.jabulani)
            }
        )
    }
}