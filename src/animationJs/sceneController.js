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
        1.3 : {
            transform : "translateX(110px)"
        },
        2.5 : {
            transform : "translateX(200px)"
        },
        5.6 : {
            transform : "translateX(300px)"
        },
    },
    ".loadingScreen" : {
        0:{
            transform : "translateY(0)",
        },
        5.9:{
            transform : "translateY(0)",
        },
        6.1:{
            transform : "translateY(-100vh)",
        },
    },
    ".titleLoader" : {
        0:{
            opacity : 1
        },
        4.2:{
            opacity : 1
        },
        5.6:{
            opacity : 0
        },
    },
    ".fakeLoaderContainer" : {
        0:{
            opacity : 1
        },
        3.2:{
            opacity : 1
        },
        4.6:{
            opacity : 0
        },
    },
    ".beforeExperienceSas" : {
        0:{
            opacity : 0,
            transform : "translateY(-50px)"
        },
        4.3:{
            opacity : 0,
            transform : "translateY(-50px)"

        },
        5:{
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