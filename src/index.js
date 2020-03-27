import './style/main.styl'
import './animationJs/sceneController'
import './animationJs/fireballAnimation'
import './style/main.styl'
import * as THREE from 'three'
import Allen from './javascript/Allen.js'
import Dog from './javascript/Dog.js'
import Classic from './javascript/Classic.js'
import Mikasa from './javascript/Mikasa.js'
import Teamgeist from './javascript/Teamgeist.js'
import Jabulani from './javascript/Jabulani.js'
import Cafusa from './javascript/Cafusa.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {TweenMax,Elastic,SteppedEase} from "gsap"
import  {allParticles,StoneBuild} from './javascript/aroundFloatingPoints.js'
var OrbitControls = require('three-orbit-controls')(THREE)
import font from 'three/examples/fonts/droid/droid_serif_regular.typeface.json'
import footAudio from './audio/kick-ball.mp3'
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
const preciseLight = new THREE.SpotLight ( 0x0707ea,2)
preciseLight.position.set( -40, 2, 32 )
scene.add( preciseLight )

const globalLight = new THREE.AmbientLight( 0xffffff, 1.5)
globalLight.position.set( -80, 8, 10 )
scene.add( globalLight )

/**
 * Objects
 */

//Allen Ball
const allen = new Allen()
scene.add(allen.group)

//Golden Ball
const dog = new Dog()
scene.add(dog.group)

//Mikasa Ball
const mikasa = new Mikasa()
scene.add(mikasa.group)

//Classic ball
const classic = new Classic()
scene.add(classic.group)

//Teamgeist Ball
const teamgeist = new Teamgeist()
scene.add(teamgeist.group)

//Jabulani Ball
const jabulani = new Jabulani()
scene.add(jabulani.group)

//Cafusa Ball
const cafusa = new Cafusa()
scene.add(cafusa.group)



const spaceRatio= 6
const sphereGeo = new THREE.SphereGeometry(5,32,32)
const blue = new THREE.MeshLambertMaterial({color : 0x552227})
const red = new THREE.MeshLambertMaterial({color : 0x12312a})


allen.group.position.x=-16*spaceRatio
allen.group.position.z=9
allen.group.scale.set(0.6,0.6,0.6)
allen.group.rotation.y = 0.2
scene.add(allen.group)


const ball1Deco1=new StoneBuild(scene,-16*spaceRatio+6,1,2,0.3,"#0061ad")
const ball1Deco2=new StoneBuild(scene,-16*spaceRatio-8,-2,5,0.11,"#0061ad")
const ball1Deco3=new StoneBuild(scene,-16*spaceRatio+3,2,16,0.09,"#0061ad")
const ball1Deco4=new StoneBuild(scene,-16*spaceRatio+5,5,-5,0.31,"#1f31a1")
const ball1Deco5=new StoneBuild(scene,-16*spaceRatio-8,2,8,0.6,"#0061ad")
const ball1Deco6=new StoneBuild(scene,-16*spaceRatio-11,5,1,0.5,"#0061ad")
const ball1Deco7=new StoneBuild(scene,-16*spaceRatio-14,5,6,0.2,"#0061ad")

ball1Deco1.createStone()
ball1Deco2.createStone()
ball1Deco3.createSphere()
ball1Deco4.createSphere()
ball1Deco5.createStone()
ball1Deco6.createStone()
ball1Deco7.createStone()

dog.group.position.x=-8*spaceRatio
dog.group.position.z=10
dog.group.scale.set(0.6,0.6,0.6)
scene.add(dog.group)

const ball2Deco1=new StoneBuild(scene,-8*spaceRatio-8,-4,5,0.11,"#f48e00")
const ball2Deco2=new StoneBuild(scene,-6*spaceRatio-7,0,10,0.21,"#5b2b04")
const ball2Deco3=new StoneBuild(scene,-8*spaceRatio+2,-2,5,0.11,"#f48e00")
const ball2Deco4=new StoneBuild(scene,-6*spaceRatio+4,5,6,0.31,"#5b2b04")
const ball2Deco5=new StoneBuild(scene,-8*spaceRatio-8,-2,5,0.18,"#5b2b04")
const ball2Deco6=new StoneBuild(scene,-6*spaceRatio-7,8,8,0.4,"#5b2b04")
ball2Deco1.createStone()
ball2Deco2.createStone()
ball2Deco3.createStone()
ball2Deco4.createStone()
ball2Deco5.createStone()
ball2Deco6.createSphere()

classic.group.position.x=0*spaceRatio
classic.group.position.z=9
classic.group.scale.set(0.6,0.6,0.6)
scene.add(classic.group)

const ball3Deco1=new StoneBuild(scene,0*spaceRatio-4,5,10,0.3,"#003003")
const ball3Deco2=new StoneBuild(scene,0*spaceRatio-5,-4,5,0.11,"#003003")
const ball3Deco3=new StoneBuild(scene,0*spaceRatio+6,3,-2,0.31,"#003003")
const ball3Deco4=new StoneBuild(scene,0*spaceRatio+8,6,-8,0.21,"#003003")
const ball3Deco5=new StoneBuild(scene,0*spaceRatio+10,3,5,0.81,"#003003")
ball3Deco1.createStone()
ball3Deco2.createStone()
ball3Deco3.createSphere()
ball3Deco4.createSphere()
ball3Deco5.createSphere()

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


jabulani.group.position.x=24*spaceRatio
jabulani.group.position.y=-3.6
jabulani.group.position.z=10
jabulani.group.rotation.y=4.5
jabulani.group.scale.set(0.6,0.6,0.6)
scene.add(jabulani.group)


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

const ball7Deco1=new StoneBuild(scene,32*spaceRatio+6,1,2,0.3,"#6800ad")
const ball7Deco2=new StoneBuild(scene,32*spaceRatio-8,-2,5,0.11,"#6800ad")
const ball7Deco3=new StoneBuild(scene,32*spaceRatio-6,5,12,0.11,"#6800ad")
const ball7Deco4=new StoneBuild(scene,32*spaceRatio+5,5,5,0.31,"#6800ad")
ball7Deco1.createStone()
ball7Deco2.createStone()
ball7Deco3.createSphere()
ball7Deco4.createSphere()

/**
*Date typo
**/

// text material 
const materialText= new THREE.MeshLambertMaterial({color : 0xffffff})

//Allen's Text

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
const text = new THREE.Mesh(textGeometry, materialText)
text.position.x = -16*spaceRatio
text.position.y = 2
text.position.z = 5
text.rotation.x = 0.2
text.rotation.y = 0.2

scene.add(text)

//Ballon cassé Text


const textGeometry2 = new THREE.TextGeometry(
    '1947',
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
const text2 = new THREE.Mesh(textGeometry2, materialText)
text2.position.x = -16*spaceRatio
text2.position.y = 2
text2.position.z = 5
text2.rotation.x = 0.2
text2.rotation.y = 0.2

scene.add(text2)

//Azteca's Text

const textGeometry3 = new THREE.TextGeometry(
    '1986',
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
const text3 = new THREE.Mesh(textGeometry3, materialText)
text3.position.x = -16*spaceRatio
text3.position.y = 2
text3.position.z =5
text3.rotation.x = 0.2
text3.rotation.y = 0.2

scene.add(text3)

//FT-5's Text


const textGeometry4 = new THREE.TextGeometry(
    '1994',
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
const text4 = new THREE.Mesh(textGeometry4, materialText)
text4.position.x = -16*spaceRatio
text4.position.y = 2
text4.position.z = 5
text4.rotation.x = 0.2
text4.rotation.y = 0.2

scene.add(text4)



const textGeometry5 = new THREE.TextGeometry(
    '2006',
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
const text5 = new THREE.Mesh(textGeometry5, materialText)
text5.position.x = -16*spaceRatio
text5.position.y = 2
text5.position.z = 5
text5.rotation.x = 0.2
text5.rotation.y = 0.2

scene.add(text5)

//Jabulani's Text


const textGeometry6 = new THREE.TextGeometry(
    '2010',
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
const text6 = new THREE.Mesh(textGeometry6, materialText)
text6.position.x = -16*spaceRatio
text6.position.y = 2
text6.position.z = 5
text6.rotation.x = 0.2
text6.rotation.y = 0.2

scene.add(text6)

//Cafusa's Text


const textGeometry7 = new THREE.TextGeometry(
    '2013',
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
const text7 = new THREE.Mesh(textGeometry7, materialText)
text7.position.x = -16*spaceRatio
text7.position.y = 2
text7.position.z = 5
text7.rotation.x = 0.2
text7.rotation.y = 0.2

scene.add(text7)

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
const sphereTab=[allen.group,dog.group,classic.group,mikasa.group,teamgeist.group,jabulani.group,cafusa.group]
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

textFrameTab.forEach(Element=> {
    Element.classList.remove('revealInfo')
})

camera.position.set(sphereFocus.position.x,-1,sphereFocus.position.z+10)

camera.lookAt(sphereFocus.position)
camera.position.x+=2

/**
 * Scroll between balls with keyB arrow
 */

document.addEventListener('keyup', (e)=>{
 if(e.keyCode==32){
     keySwitcher()
 }
 else if(e.keyCode==37){
     console.log("less")
     if(sphereIncrementation > 0)
     {
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
             2,
             {
                 x:sphereFocus.position.x+2,
                 y:0,
                 z:sphereFocus.position.z+10,
                 ease: Elastic.easeOut.config(0.5, 0.3)
             },
             sceneSwitcher()
         )

         ballSound.play()
         ballSound.currentTime = 0

     }

 }





 else if(e.keyCode==39){
     console.log("more")
     if(sphereIncrementation < sphereTab.length-1)
     {
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
             2,
             {
                 x:sphereFocus.position.x+2,
                 y:0,z:sphereFocus.position.z+10,
                 ease: Elastic.easeOut.config(0.5, 0.3)
             }
         )

         ballSound.play()
         ballSound.currentTime = 0
         sceneSwitcher()

     }
 }
})

/**
* Animation ball on scroll
*/

// Audio of the audience
const ballSound = new Audio (footAudio)
ballSound.volume = 0.5

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
                    2,
                    {
                        x:sphereFocus.position.x+2,
                        y:0,z:sphereFocus.position.z+10,
                        ease: Elastic.easeOut.config(0.5, 0.3)
                    }
                )

                ballSound.play()
                ballSound.currentTime = 0

                // But we block the scroll to avoid jumping in other scenes
                canScroll = false
                setTimeout(function() {
                    canScroll = true
                    //console.log(canScroll)
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
                }, 800)

                sphereFocus= sphereTab[sphereIncrementation]
                TweenMax.to(
                    camera.position,
                    2,
                    {
                        x:sphereFocus.position.x+2,
                        y:0,
                        z:sphereFocus.position.z+10,
                        ease: Elastic.easeOut.config(0.5, 0.3)
                    },
                    sceneSwitcher()
                )

                ballSound.play()
                ballSound.currentTime = 0

                // But we block the scroll to avoid jumping in other scenes
                canScroll = false
                setTimeout(function() {
                    canScroll = true
                    //console.log(canScroll)
                }, 2000)
            }
        }
    }
})

//console.log(sphereTab)

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
     translationX=cursorX/100
    //  animating the 3d smooth ofthe text + the little move of the ball in the back
})

// making the particles move with a little easing on mouse move 


const particleMove = () => {

    for(let i = 0; i < originalPlaceX.length; i++){
        targetParticules = originalPlaceX[i]+translationX
        travel = targetParticules-allParticles[i].position.x
        allParticles[i].position.x += travel/30
        //console.log(allParticles[i].position.x,travel,targetParticules)
        }
    requestAnimationFrame(particleMove)
}
requestAnimationFrame(particleMove)


/**
 * Loop
 */

const loop = () =>
{
    window.requestAnimationFrame(loop)

    //Update Allen's Text
const TextAngle = Date.now() * 0.0000004
text.position.x = Math.sin(TextAngle) - 110
text.position.y = Math.sin(Date.now() * 0.001) + 5

//Update Ballon d'or's Text
const TextAngle2 = Date.now() * 0.0000004
text2.position.x = Math.sin(TextAngle2) - 60
text2.position.y = Math.sin(Date.now() * 0.001) + 5

//Update Azteca's Text
const TextAngle3 = Date.now() * 0.0000004
text3.position.x = Math.sin(TextAngle3) - 15
text3.position.y = Math.sin(Date.now() * 0.001) + 5

//Update FT-5's Text
const TextAngle4 = Date.now() * 0.0000004
text4.position.x = Math.sin(TextAngle4) + 33
text4.position.y = Math.sin(Date.now() * 0.001) + 5

//Update Teamgeist's Text
const TextAngle5 = Date.now() * 0.0000004
text5.position.x = Math.sin(TextAngle5) + 81
text5.position.y = Math.sin(Date.now() * 0.001) + 5

//Update Jabulani's Text
const TextAngle6 = Date.now() * 0.0000004
text6.position.x = Math.sin(TextAngle6) + 131
text6.position.y = Math.sin(Date.now() * 0.001) + 5

//Update Cafuna's Text
const TextAngle7 = Date.now() * 0.0000004
text7.position.x = Math.sin(TextAngle7) + 178
text7.position.y = Math.sin(Date.now() * 0.001) + 5

    // Change camera position with cursor
    /*camera.position.x = cursor.x * 40
    camera.position.y = - cursor.y * 40
    camera.lookAt(scene.position)*/

    // Render
    renderer.render(scene, camera)

}
loop()
