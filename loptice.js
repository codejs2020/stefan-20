// Deveti

function getRandomColor(){
    let red = Math.ceil(Math.random() * 256);
    let green = Math.ceil(Math.random() * 256);
    let blue = Math.ceil(Math.random() * 256);
  
    let randomColor = `rgb(${red}, ${green}, ${blue})`;
  
    return randomColor;
}

function getRadnomSize(){
    let size = Math.ceil(Math.random()*350 + 50) + 'px';
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

function drawBall(id){
    document.getElementById(id).style.background = getRandomColor();
    document.getElementById(id).style.width = getRadnomSize();
    document.getElementById(id).style.height = document.getElementById(id).style.width;
    document.getElementById(id).style.marginLeft = getLeftMargin();
    document.getElementById(id).style.marginTop = getTopMargin();
    document.getElementById(id).style.borderRadius = '50%';
}

drawBall('loptica1');
drawBall('loptica2');
drawBall('loptica3');
drawBall('loptica4');
drawBall('loptica5');
drawBall('loptica6');
drawBall('loptica7');
drawBall('loptica8');
drawBall('loptica9');
drawBall('loptica10');