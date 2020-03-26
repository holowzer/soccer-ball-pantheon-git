import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Golden
{
    constructor()
    {
        this.group = new THREE.Group()

        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        gltfLoader.load(
            '/models/golden-ball/scene.glb',
            (_gltf) =>
            {
                this.golden = _gltf.scene.children[0]
                this.golden.scale.set(0.4, 0.4, 0.4)
                this.group.add(this.golden)
            }
        )
    }
}
