// array of background colors
var colors = [
    'blue',
    'green',
    'red',
    'purple',
    'orange',
    'yellow',
    'pink'
]

// select the body 
var body = document.querySelector('body');
body.style.backgroundColor = "lightGreen"

// change color function
function changeColor() {
    let bgColor = parseInt(Math.random()*colors.length+1); // parseInt take a string and returns a integer
    body.style.backgroundColor = colors[bgColor] 
}