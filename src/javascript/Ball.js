import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default class Ball
{
    constructor()
    {
        this.group = new THREE.Group()

        const gltfLoader = new GLTFLoader()

        gltfLoader.load(
            '/models/mikasa_ft-5/scene.gltf',
            (_gltf) =>
            {
                this.ball = _gltf.scene.children[0]
                this.ball.scale.set(1, 1, 1)
                this.group.add(this.ball)
            }
        )
    }
}
