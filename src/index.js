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
const sphere6 =  new THREE.Mesh(sphereGeo,red)
const sphere7 =  new THREE.Mesh(sphereGeo,blue)


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

sphere6.position.x=24*spaceRatio
sphere6.position.z=10
sphere6.scale.set(0.6,0.6,0.6)
scene.add(sphere6)

sphere7.position.x=32*spaceRatio
sphere7.position.z=10
sphere7.scale.set(0.6,0.6,0.6)
scene.add(sphere7)

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



renderer.domElement.classList.add('ballCanvas')
// the textframe changer part
const textFrameTab= document.querySelectorAll('.textPlaceHolder')
// to change the camera focus
const sphereTab=[sphere1,sphere2,sphere3,sphere4,sphere5,sphere6,sphere7] 
const gradientLayer=document.querySelectorAll('.bgGradientLayer')
let sphereIncrementation=0
let sphereFocus= sphereTab[sphereIncrementation]


const sceneSwitcher = ()=>{
    if(sphereIncrementation<sphereTab.length){
        gradientLayer.forEach(Element=> {
            Element.classList.add('bgHidden')
        })
        gradientLayer[sphereIncrementation].classList.remove('bgHidden')
     
    } 
    else{

        gradientLayer.forEach(Element=> {
            Element.classList.add('bgHidden')
        })
        gradientLayer[0].classList.remove('bgHidden')

    }
}
window.addEventListener('click',sceneSwitcher)

/**
 * Scroll between balls with space bar 
 */

document.addEventListener('keyup', (e)=>{
 if(e.keyCode==32){
     sceneSwitcher()
 }
});

/**
* Animation ball on scroll
*/

// Set the scroll
let canScroll = true

window.addEventListener('wheel', (_event) => {
    //_event.preventDefault()

    // Accept the scroll
    if(canScroll){

        // If we scroll down
        if(_event.deltaY > 0)
        {
            // And if our position is under the length array
            if(sphereIncrementation < sphereTab.length-1)
            {
                //Then we go on the next scene by changing camera position
                sphereIncrementation++

                textFrameTab.forEach(Element=> {
                    Element.classList.remove('revealInfo')
                })
    
                setTimeout(() => {
                    textFrameTab[sphereIncrementation].classList.toggle('revealInfo')  
                }, 400)
        
                sphereFocus = sphereTab[sphereIncrementation]
                TweenMax.to(
                    camera.position,
                    1,
                    {
                        x:sphereFocus.position.x+2,
                        y:0,z:sphereFocus.position.z+10, 
                        ease: Elastic.easeOut.config(0.5, 0.3)
                    }
                )

                // But we block the scroll to avoid jumping in other scenes
                canScroll = false
                setTimeout(function() {
                    canScroll = true
                    console.log(canScroll)
                }, 2000)
                sceneSwitcher()

            }
        }

        // If we scroll up
        if(_event.deltaY < 0)
        {
            // And if our position isn't negative
            if(sphereIncrementation > 0)
            {
                // Then we go on the previous scene by changing camera position
                textFrameTab.forEach(Element=> {
                    Element.classList.remove('revealInfo')
                })


                sphereIncrementation --
                setTimeout(() => {
                    textFrameTab[sphereIncrementation].classList.toggle('revealInfo')  
                }, 400)
        
                sphereFocus= sphereTab[sphereIncrementation]
                TweenMax.to(
                    camera.position,
                    1,
                    {
                        x:sphereFocus.position.x+2,
                        y:0,
                        z:sphereFocus.position.z+10, 
                        ease: Elastic.easeOut.config(0.5, 0.3) 
                    },
                    sceneSwitcher()
                    

                )

                // But we block the scroll to avoid jumping in other scenes
                canScroll = false
                setTimeout(function() {
                    canScroll = true
                    console.log(canScroll)
                }, 2000)
            }
        }
    }
})

console.log(sphereTab)


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


/**
 * Loop
 */

const loop = () =>
{
    window.requestAnimationFrame(loop)

    // Change camera position with cursor 
    /*camera.position.x = cursor.x * 40
    camera.position.y = - cursor.y * 40
    camera.lookAt(scene.position)*/

    // Render
    renderer.render(scene, camera)

}

loop()