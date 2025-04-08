const mySound = document.getElementById('mysound')
console.log(mySound)
const icon = document.getElementById('icon')
console.log(icon)

icon.onclick = function(){
    if(mySound.paused){
        mySound.play()
        icon.src = './media/pause.png'
    } else{
        mySound.pause();
        icon.src = './media/play.png'
    }
}