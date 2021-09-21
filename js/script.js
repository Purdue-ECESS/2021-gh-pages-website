function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
    document.getElementById("ghost").style.display = 'block';
}

function rightPressed(){
    alert('Right was pressed');
}

function leftPressed(){
    alert('Left was pressed');
}

function upPressed(){
    alert('Up was pressed');
}

function downPressed(){
    alert('Down was pressed');
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        leftPressed();
    }
    else if(event.keyCode == 38) {
        upPressed();
    }
    else if(event.keyCode == 39) {
        rightPressed();
    }
    else if(event.keyCode == 40) {
        downPressed();
    }
});