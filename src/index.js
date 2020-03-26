import './style/main.styl'
import './animationJs/sceneController'
import './animationJs/fireballAnimation'
import './style/main.styl'
import * as THREE from 'three'
import Allen from './javascript/Allen.js'
import Golden from './javascript/Golden.js'
import Classic from './javascript/Classic.js'
import Mikasa from './javascript/Mikasa.js'
import Teamgeist from './javascript/Teamgeist.js'
import Cafusa from './javascript/Cafusa.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {TweenMax,Elastic,SteppedEase} from "gsap"
import  {allParticles,StoneBuild} from './javascript/aroundFloatingPoints.js'
var OrbitControls = require('three-orbit-controls')(THREE)
import font from './style/fonts/Voyage_Regular.json'
// import './animationJs/particlesCursor'

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
const preciseLight = new THREE.SpotLight ( 0xffffff,2)
preciseLight.position.set( -300, 210, 150 )
scene.add( preciseLight )

const globalLight = new THREE.AmbientLight( 0xffffff, 0.6)
globalLight.position.set( -8, -8, 10 )
scene.add( globalLight )

/**
 * Objects
 */

//Allen Ball
const allen = new Allen()
scene.add(allen.group)

//Golden Ball
const golden = new Golden()
scene.add(golden.group)

//Mikasa Ball
const mikasa = new Mikasa()
scene.add(mikasa.group)

//Classic ball
const classic = new Classic()
scene.add(classic.group)

//Teamgeist Ball
const teamgeist = new Teamgeist()
scene.add(teamgeist.group)

//Cafusa Ball
const cafusa = new Cafusa()
scene.add(cafusa.group)



const spaceRatio= 3
const sphereGeo = new THREE.SphereGeometry(5,32,32)
const blue = new THREE.MeshLambertMaterial({color : 0x552227})
const red = new THREE.MeshLambertMaterial({color : 0x12312a})
const sphere6 =  new THREE.Mesh(sphereGeo,red)


allen.group.position.x=-16*spaceRatio
allen.group.position.z=10
allen.group.scale.set(0.6,0.6,0.6)
allen.group.rotation.y = 0.2
scene.add(allen.group)


const ball1Deco1=new StoneBuild(scene,-16*spaceRatio+6,1,2,0.3,"#0061ad")
const ball1Deco2=new StoneBuild(scene,-16*spaceRatio-8,-2,5,0.11,"#0061ad")
const ball1Deco3=new StoneBuild(scene,-16*spaceRatio,0,17,0.09,"#0061ad")
const ball1Deco4=new StoneBuild(scene,-16*spaceRatio+5,5,5,0.31,"#023761")
ball1Deco1.createStone()
ball1Deco2.createStone()
ball1Deco3.createSphere()
ball1Deco4.createSphere()

golden.group.position.x=-8*spaceRatio
golden.group.position.z=10
golden.group.scale.set(0.6,0.6,0.6)
scene.add(golden.group)

const ball2Deco2=new StoneBuild(scene,-8*spaceRatio-8,-2,5,0.11,"#f48e00")
const ball2Deco3=new StoneBuild(scene,-6*spaceRatio-7,5,13,0.11,"#cfa911")
ball2Deco2.createStone()
ball2Deco3.createSphere()

classic.group.position.x=0*spaceRatio
classic.group.position.z=10
classic.group.scale.set(0.6,0.6,0.6)
scene.add(classic.group)

const ball3Deco1=new StoneBuild(scene,0*spaceRatio-2,1,14,0.3,"#003003")
const ball3Deco2=new StoneBuild(scene,0*spaceRatio-2,-2,5,0.11,"#003003")
const ball3Deco4=new StoneBuild(scene,0*spaceRatio+5,3,15,0.31,"#003003")
ball3Deco1.createStone()
ball3Deco2.createStone()
ball3Deco4.createSphere()

mikasa.group.position.x=8*spaceRatio
mikasa.group.position.z=10
mikasa.group.scale.set(0.6,0.6,0.6)
mikasa.group.rotation.y = 1
scene.add(mikasa.group)

const ball4Deco1=new StoneBuild(scene,8*spaceRatio+6,1,2,0.3,"#530000")
const ball4Deco2=new StoneBuild(scene,8*spaceRatio-8,-2,5,0.11,"#6b201a")
const ball4Deco3=new StoneBuild(scene,8*spaceRatio+7,2,13,0.11,"#530000")
const ball4Deco4=new StoneBuild(scene,8*spaceRatio+3,5,12,0.31,"#530000")
ball4Deco1.createStone()
ball4Deco2.createStone()
ball4Deco3.createSphere()
ball4Deco4.createSphere()

teamgeist.group.position.x=16*spaceRatio
teamgeist.group.position.z=10
teamgeist.group.scale.set(0.6,0.6,0.6)
teamgeist.group.rotation.y = 3.3
teamgeist.group.rotation.z = 3
scene.add(teamgeist.group)

const ball5Deco1=new StoneBuild(scene,16*spaceRatio+6,1,12,0.3,"#0061ad")
const ball5Deco2=new StoneBuild(scene,16*spaceRatio-8,-2,5,0.11,"#0061ad")
const ball5Deco3=new StoneBuild(scene,16*spaceRatio-7,5,5,0.11,"#0061ad")
const ball5Deco4=new StoneBuild(scene,16*spaceRatio+5,5,13,0.31,"#023761")
ball5Deco1.createStone()
ball5Deco2.createStone()
ball5Deco3.createSphere()
ball5Deco4.createSphere()


sphere6.position.x=24*spaceRatio
sphere6.position.z=10
sphere6.scale.set(0.6,0.6,0.6)
scene.add(sphere6)


const ball6Deco1=new StoneBuild(scene,24*spaceRatio+6,1,14,0.3,"#0061ad")
const ball6Deco2=new StoneBuild(scene,24*spaceRatio-8,-2,5,0.11,"#0061ad")
const ball6Deco3=new StoneBuild(scene,24*spaceRatio-7,5,5,0.11,"#0061ad")
const ball6Deco4=new StoneBuild(scene,24*spaceRatio+5,5,5,0.31,"#023761")
ball6Deco1.createStone()
ball6Deco2.createStone()
ball6Deco3.createSphere()
ball6Deco4.createSphere()

cafusa.group.position.x=32*spaceRatio
cafusa.group.position.z=10
cafusa.group.scale.set(0.6,0.6,0.6)
scene.add(cafusa.group)

const ball7Deco1=new StoneBuild(scene,32*spaceRatio+6,1,2,0.3,"#0061ad")
const ball7Deco2=new StoneBuild(scene,32*spaceRatio-8,-2,5,0.11,"#0061ad")
const ball7Deco3=new StoneBuild(scene,32*spaceRatio-7,5,14,0.11,"#0061ad")
const ball7Deco4=new StoneBuild(scene,32*spaceRatio+5,5,5,0.31,"#023761")
ball7Deco1.createStone()
ball7Deco2.createStone()
ball7Deco3.createSphere()
ball7Deco4.createSphere()

/**
*Date typo
**/
const material = new THREE.MeshBasicMaterial({
  color: 0x000000,
})

const textGeometry = new THREE.TextGeometry(
    '1930',
    {
        font: new THREE.Font(font),
        size: 2,
        height: 0.3,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelOffset: - 0.08,
        bevelSegments: 10
    }
)
const text = new THREE.Mesh(textGeometry, material)
text.position.x = -16*spaceRatio
text.position.y = 4
text.position.z = 7
text.rotation.x = 0.2
text.rotation.y = 0.2

scene.add(text)


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
 * Get all objects to switch between them and change elements of the scene 
 */

renderer.domElement.classList.add('ballCanvas')
// the textframe changer part
const textFrameTab= document.querySelectorAll('.textPlaceHolder')
// to change the camera focus
const sphereTab=[allen.group,golden.group,classic.group,mikasa.group,teamgeist.group,sphere6,cafusa.group]
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

textFrameTab.forEach(Element=> {
    Element.classList.remove('revealInfo')
})

camera.position.set(sphereFocus.position.x,-1,sphereFocus.position.z+10)

camera.lookAt(sphereFocus.position)
camera.position.x+=2

/**
 * Scroll between balls with space bar
 */

document.addEventListener('keyup', (e)=>{
 if(e.keyCode==32){
     sceneSwitcher()
 }
})

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
                }, 1000)

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
                    //console.log(canScroll)
                }, 1000)
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
                }, 800)

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
                    //console.log(canScroll)
                }, 1000)
            }
        }
    }
})

//console.log(sphereTab)

/**
 * Date Animation
 */
const date = () =>
{
    window.requestAnimationFrame(date)

    // Update Text
    const TextAngle = Date.now() * 0.0000004
    text.position.z = Math.cos(TextAngle)
    text.position.x = Math.sin(TextAngle) - 10
    text.position.y = Math.sin(Date.now() * 0.001) + 8

    // Render
    renderer.render(scene, camera)
}

date()

/**
 * Cursor effect on particles
 */
window.addEventListener('click',()=>{
    console.log(allParticles)
})

let cursorX
let cursorY
let translationX=0
let targetParticules
let travel
let originalPlaceX=[]
allParticles.forEach(element => {
    originalPlaceX.push(element.position.x)
})

// get the curosor position
window.addEventListener('mousemove',(e)=>{
    // i had to calm down the cursor strength in term of number size
     cursorX = e.clientX - 750
     cursorY = e.clientY - 150
     translationX=cursorX/500
    //  animating the 3d smooth ofthe text + the little move of the ball in the back
})

const particleMove = () => {

    for(let i = 0; i < originalPlaceX.length; i++){
        targetParticules = originalPlaceX[i]+translationX
        travel = targetParticules-allParticles[i].position.x
        allParticles[i].position.x += travel/20
        //console.log(allParticles[i].position.x,travel,targetParticules)
        }
    requestAnimationFrame(particleMove)
}
requestAnimationFrame(particleMove)
// dx =originalPlaceX[i]+translationX


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
