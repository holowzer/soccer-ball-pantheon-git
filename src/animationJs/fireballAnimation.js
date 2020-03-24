const fireball = document.querySelector('.radialSun')
const textMove = document.querySelector('.textCursorMove')

let cursorX 
let cursorY

// get the curosor position 
window.addEventListener('mousemove',(e)=>{
     cursorX = e.clientX - 650
     cursorY = e.clientY - 150
     console.log(cursorX , cursorY)
     fireball.style.transform = "translateX("+  cursorX/7 +"px) translateY("+  cursorY/5  +"px)"
     textMove.style.transform = "rotateY("+  cursorX/125 +"deg) translateY("+  cursorY/60  +"px)"
})

 