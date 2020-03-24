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
        3.6 : {
            transform : "translateX(300px)"
        },
    },
    ".loadingScreen" : {
        0:{
            transform : "translateY(0)",
        },
        3.9:{
            transform : "translateY(0)",
        },
        4.1:{
            transform : "translateY(-100vh)",
        },
    },
    ".titleLoader" : {
        0:{
            opacity : 1
        },
        3.2:{
            opacity : 1
        },
        3.6:{
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
        3.6:{
            opacity : 0
        },
    },
    ".beforeExperienceSas" : {
        0:{
            opacity : 0
        },
        4.3:{
            opacity : 0
        },
        5:{
            opacity : 1
        },
    },
},{
    selector : true,
    easing : "ease-out"
}
).playCSS()