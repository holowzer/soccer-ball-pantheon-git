const fireball = document.querySelector('.radialSun')
const textMove = document.querySelector('.textCursorMove')

let cursorX 
let cursorY

// get the curosor position 
window.addEventListener('mousemove',(e)=>{
    // i had to calm down the cursor strength 
     cursorX = e.clientX - 750
     cursorY = e.clientY - 150
    //  animating the 3d smooth of the text + the little move of the ball in the back
     fireball.style.transform = "translateX("+  cursorX/7 +"px) translateY("+  cursorY/10  +"px)"
     textMove.style.transform = "rotateY("+  cursorX/185 +"deg) translateY("+  cursorY/60  +"px)"
})

