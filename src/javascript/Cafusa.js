import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Cafusa
{
    constructor()
    {
        this.group = new THREE.Group()

        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        gltfLoader.load(
            '/models/cafusa-ball/scene.glb',
            (_gltf) =>
            {
                this.cafusa = _gltf.scene.children[0]
                this.cafusa.scale.set(0.45, 0.45, 0.45)
                this.group.add(this.cafusa)
            }
        )
    }
}
