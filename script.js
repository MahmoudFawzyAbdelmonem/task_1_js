var box = document.querySelector(".rocket")
var boxLeft = 0
var boxRight = 0 
var boxUp = 0
var boxBottom = 0

document.addEventListener ("keydown" , function(e){
    // console.log(e);
    if (e.code == 'ArrowRight') {
        boxRight += 100
        box.style.left = boxRight + 'px'
    }else if (e.code == 'ArrowLeft') {
        boxRight -= 100
        box.style.left = boxRight + 'px'
    }else if (e.code == 'ArrowUp'){
        boxUp -= 100
        box.style.top = boxUp + 'px'
    }else if (e.code == 'ArrowDown') {
        boxUp += 100
        box.style.top = boxUp+ 'px'
    }


})

var smallBox = document.querySelector (".shot")

document.addEventListener ("keydown" , function (e) {
    if(e.code == 'Space') { 
        smallBox.style.opacity = 3
        smallBox.style.bottom =700 + 'px'
        smallBox.style.transition= 1  +'s'
    } 
})
 document.addEventListener('keyup', function (e) {
    if(e.code == 'Space') {
        smallBox.style.opacity= 0
        smallBox.style.bottom = 0+'px'
        smallBox.style.transition= 0 +'s'
    }
 })

 var smallBox1 = document.querySelector (".shot1")

document.addEventListener ("keydown" , function (e) {
    if(e.code == 'Space') { 
        smallBox1.style.opacity = 3
        smallBox1.style.bottom =700 + 'px'
        smallBox1.style.transition= 1  +'s'
    } 
})
 document.addEventListener('keyup', function (e) {
    if(e.code == 'Space') {
        smallBox1.style.opacity= 0
        smallBox1.style.bottom = 0+'px'
        smallBox1.style.transition= 0 +'s'
    }
 })