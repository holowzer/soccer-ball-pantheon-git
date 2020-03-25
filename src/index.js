import './style/main.styl'
import './animationJs/sceneController'
import './animationJs/fireballAnimation'
import './style/main.styl'
import * as THREE from 'three'
import Ball from './javascript/ball.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {TweenMax,Elastic,SteppedEase} from "gsap"
var OrbitControls = require('three-orbit-controls')(THREE)


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
const preciseLight = new THREE.SpotLight    ( 0xff7777);
preciseLight.position.set( 0, 0, 220 );
scene.add( preciseLight );

const globalLight = new THREE.AmbientLight( 0xffffff, 0.3);
globalLight.position.set( -8, -8, 10 );
scene.add( globalLight );


const ball = new Ball()
// scene.add(ball.group)


// IL FAUDRA AJOUTER TOUTES LES 
// BALLLES ICI ET REMPLACER LES SPHERES PAR LES BALLES 





const spaceRatio= 3
const sphereGeo = new THREE.SphereGeometry(5,32,32)
const blue = new THREE.MeshLambertMaterial({color : 0x552227})
const red = new THREE.MeshLambertMaterial({color : 0x12312a})
const sphere1 = new THREE.Mesh(sphereGeo,blue)
const sphere2 =  new THREE.Mesh(sphereGeo,red)
const sphere3 =  new THREE.Mesh(sphereGeo,blue)
const sphere4 =  new THREE.Mesh(sphereGeo,red)
const sphere5 =  new THREE.Mesh(sphereGeo,blue)


sphere1.position.x=-16*spaceRatio
sphere1.position.z=10
sphere1.scale.set(0.6,0.6,0.6)
scene.add(sphere4)

sphere2.position.x=-8*spaceRatio
sphere2.position.z=10
sphere2.scale.set(0.6,0.6,0.6)
scene.add(sphere3)

sphere3.position.x=0*spaceRatio
sphere3.position.z=10
sphere3.scale.set(0.6,0.6,0.6)
scene.add(sphere2)

scene.add(sphere1)
sphere4.position.x=8*spaceRatio
sphere4.position.z=10
sphere4.scale.set(0.6,0.6,0.6)

sphere5.position.x=16*spaceRatio
sphere5.position.z=10
sphere5.scale.set(0.6,0.6,0.6)
scene.add(sphere5)



/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 200)
camera.position.z = 20
camera.position.x=-20
camera.position.y=-1
scene.add(camera)



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({antialias : true,alpha: true })  
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setClearColor('#111654',0)
document.querySelector('.balloonWorld').appendChild(renderer.domElement)




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



renderer.domElement.classList.add('ballCanvas')
// the textframe changer part
const textFrameTab= document.querySelectorAll('.textPlaceHolder')
// to change the camera focus
const sphereTab=[sphere1,sphere2,sphere3,sphere4,sphere5] 
let sphereIncrementation=0
let sphereFocus= sphereTab[sphereIncrementation]


const sceneSwitcher = ()=>{
    if(sphereIncrementation<sphereTab.length-1){
        sphereIncrementation++

        textFrameTab.forEach(Element=> {
            Element.classList.remove('revealInfo')
        })
        setTimeout(() => {
            textFrameTab[sphereIncrementation].classList.toggle('revealInfo')  
        }, 400);

        sphereFocus= sphereTab[sphereIncrementation]
        TweenMax.to(camera.position,1.5,{x:sphereFocus.position.x+2,y:0,z:sphereFocus.position.z+10, ease: Elastic.easeOut.config(0.7, 0.4) })        
    } 
    else{
        textFrameTab.forEach(Element=> {
            Element.classList.remove('revealInfo')
        })
        sphereIncrementation=0
        setTimeout(() => {
            textFrameTab[sphereIncrementation].classList.toggle('revealInfo')  
        }, 400);

        sphereFocus= sphereTab[sphereIncrementation]
        TweenMax.to(camera.position,4,{x:sphereFocus.position.x+2,y:0,z:sphereFocus.position.z+10, ease: Elastic.easeOut.config(0.6, 0.3) })
    }
}


// window.addEventListener('click',sceneSwitcher)

// scroll between balls with space bar 

document.addEventListener('keyup', (e)=>{
 if(e.keyCode==32){
     sceneSwitcher()
 }
});



textFrameTab.forEach(Element=> {
    Element.classList.remove('revealInfo')
})

camera.position.set(sphereFocus.position.x,-1,sphereFocus.position.z+10)
setTimeout(() => {
    textFrameTab[0].classList.toggle('revealInfo')  
}, 600);

camera.lookAt(sphereFocus.position)
camera.position.x+=2
// controls = new OrbitControls(camera)