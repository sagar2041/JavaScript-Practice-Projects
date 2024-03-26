// random background color generator

// generate random color

const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

console.log(randomColor());

let intervalId
function startChangingcolor (){
   if(!intervalId){
    intervalId = setInterval(changeBgcolor,1000)
   }

    function changeBgcolor(){
          document.body.style.backgroundColor = randomColor()
    }
   
}

function stopChangingcolor (){

    clearInterval(intervalId)
    intervalId = null;
    
}



const start =  document.querySelector("#start").addEventListener("click",startChangingcolor)


const stop =  document.querySelector("#stop").addEventListener("click",stopChangingcolor)