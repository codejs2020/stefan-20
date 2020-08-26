// Deveti

function getRandomColor(){
    let red = Math.ceil(Math.random() * 256);
    let green = Math.ceil(Math.random() * 256);
    let blue = Math.ceil(Math.random() * 256);
  
    let randomColor = `rgb(${red}, ${green}, ${blue})`;
  
    return randomColor;
}

function getRadnomSize(){
    let size = Math.ceil(Math.random()*180 + 20) + 'px';
    return size;
}

function getLeftMargin(){
    let leftMargin = Math.floor(Math.random()*screen.width) + 'px';
    return leftMargin
}

function getTopMargin(){
    let topMargin = Math.floor(Math.random()*screen.height) + 'px';
    return topMargin;
}

function drawBall(){
    let ballSize;
    document.getElementById('loptica').style.background = getRandomColor();
    document.getElementById('loptica').style.width = getRadnomSize();
    ballSize = document.getElementById('loptica').style.width;
    document.getElementById('loptica').style.height = document.getElementById('loptica').style.width;
    document.getElementById('loptica').style.marginLeft = getLeftMargin();
    document.getElementById('loptica').style.marginTop = getTopMargin();
}

drawBall();