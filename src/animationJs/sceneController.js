import Scene from 'scenejs'

// a fake loading screen to let the webgl model load patiently

const FakeLoad = new Scene({
    ".yellowFiller" : {
        0 : {
            transform : "translateX(0)"
        },
        0.8 : {
            transform : "translateX(50px)"
        },
        1 : {
            transform : "translateX(50px)"
        },
        2.3 : {
            transform : "translateX(110px)"
        },
        2.5 : {
            transform : "translateX(200px)"
        },
        6.5 : {
            transform : "translateX(220px)"
        },
        10.5 : {
            transform : "translateX(250px)"
        },
        15.6 : {
            transform : "translateX(300px)"
        },
    },
    ".loadingScreen" : {
        0:{
            transform : "translateY(0)",
        },
        14.6:{
            transform : "translateY(0)",
        },
        15.1:{
            transform : "translateY(-100vh)",
        },
    },
    ".titleLoader" : {
        0:{
            opacity : 1
        },
        14.9:{
            opacity : 1
        },
        15.3:{
            opacity : 0
        },
    },
    ".fakeLoaderContainer" : {
        0:{
            opacity : 1
        },
        13.2:{
            opacity : 1
        },
        14.9:{
            opacity : 0
        },
    },
    ".beforeExperienceSas" : {
        0:{
            opacity : 0,
            transform : "translateY(-50px)"
        },
        14.9:{
            opacity : 0,
            transform : "translateY(-50px)"

        },
        15.3:{
            opacity : 1,
            transform : "translateY(0px)"

        },
    },
},{
    selector : true,
    easing : "cubic-bezier(.7,.31,0.3,.86)"
}
).playCSS()


// making the transition when we click on start the experience 


const ExperienceStarter= new Scene({
    ".globalWindow" : {
        0 : {
            opacity : 1  , 
            transform : "translateY(0)"        
        },
         0.8: {
            opacity : 1,
            transform : "translateY(0)" 
        },
        1.5 : {
            opacity : 0,
            transform : "translateY(0)" 
        },
        3 : {
            opacity : 0,
            transform : "translateY(-100vh)"        

        },
    },
    ".balloonWorld" : {
        0 : {
            opacity : 0
        },
        3 : {
            opacity : 0
        },
        3.5 : {
            opacity : 1
        },
    },
},{
        selector : true,
    easing : "cubic-bezier(.7,.31,0.3,.86)"

}
)




document.querySelector('.experienceStarter').addEventListener('click', ()=>{
    ExperienceStarter.playCSS()
    setTimeout(() => {
       document.querySelector('.ball1Text').classList.add('revealInfo')  
    }, 2600);
})




const exit=document.querySelector('.exitButton')
const restart=document.querySelector('.endingButton')




restart.addEventListener('mousedown',()=>{
document.querySelector('.happyEnding').classList.add('goUpstairs')
})
// exit.addEventListener('mousedown',ExperienceEnding.playCSS)


exit.addEventListener('mousedown',()=>{
    console.log('nossss')
    document.querySelector('.happyEnding').classList.remove('goUpstairs')
})

