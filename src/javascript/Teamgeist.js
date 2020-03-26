import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Teamgeist
{
    constructor()
    {
        this.group = new THREE.Group()

        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        gltfLoader.load(
            '/models/teamgeist-ball/scene.glb',
            (_gltf) =>
            {
                this.teamgeist = _gltf.scene.children[0]
                this.teamgeist.scale.set(4, 4, 4)
                this.group.add(this.teamgeist)
            }
        )
    }
}
