import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Dog
{
    constructor()
    {
        this.group = new THREE.Group()

        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        gltfLoader.load(
            '/models/dog-ball/scene.gltf',
            (_gltf) =>
            {
                this.dog = _gltf.scene.children[0]
                this.dog.scale.set(0.03, 0.03, 0.03)
                this.group.add(this.dog)
            }
        )
    }
}