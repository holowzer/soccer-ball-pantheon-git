import './style/main.styl'
import './animationJs/sceneController'
import './animationJs/fireballAnimation'
import './style/main.styl'
import * as THREE from 'three'
import Ball from './javascript/ball.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (_event) =>
{
    cursor.x = _event.clientX / sizes.width - 0.5
    cursor.y = _event.clientY / sizes.height - 0.5
})

/**
 * Scene
 */
const scene = new THREE.Scene()

/**
 * Lights
 */
 const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
  scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.x = 5
directionalLight.position.y = 5
directionalLight.position.z = 5
scene.add(directionalLight)

/**
* ball
*/
// const gltfLoader = new GLTFLoader()
// gltfLoader.load(
//     '/models/mikasa_ft-5/scene.gltf',
//     (gltf) =>
//     {
//         while(gltf.scene.children.length)
//         {
//             const child = gltf.scene.children[0]
//             scene.add(child)
//         }
//     }
// )

const ball = new Ball()
scene.add(ball.group)

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 20)
camera.position.z = 8
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()  
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

/**
 * Resize
 */
window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
})

/**
 * Loop
 */
const loop = () =>
{
    window.requestAnimationFrame(loop)

    // Render
    renderer.render(scene, camera)
}

loop()

document.querySelector('.balloonWorld').appendChild(renderer.domElement)
renderer.domElement.classList.add('ballCanvas')