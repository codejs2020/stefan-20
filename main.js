// Prvi

function formatNumber (num, numOfZeros){
    let br = num + '';
    let zeros = '';

    for (let i=0; i<numOfZeros-br.length; i++){
        zeros += '0'
    }

    return zeros + br;
}

console.log(formatNumber(78, 5));


// Drugi

function numberOfVocals(text){
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;

    for (let i=0; i<text.length; i++)
        if (vocals.includes(text.charAt(i))){
            counter++;
        }

    return counter;
}

console.log(numberOfVocals('aedf ifuo fafea'))


// Treci

function openFootballTab(){
    document.getElementById("fudbal").style.display = "block";
    document.getElementById("tenis").style.display = "none";
    document.getElementById("kosarka").style.display = "none";
}
function openTenisTab(){
    document.getElementById("fudbal").style.display = "none";
    document.getElementById("tenis").style.display = "block";
    document.getElementById("kosarka").style.display = "none";
}
function openBasketballTab(){
    document.getElementById("fudbal").style.display = "none";
    document.getElementById("tenis").style.display = "none";
    document.getElementById("kosarka").style.display = "block";
}

document.getElementById("btnFudbal").addEventListener("click", openFootballTab);
document.getElementById("btnTenis").addEventListener("click", openTenisTab);
document.getElementById("btnKosarka").addEventListener("click", openBasketballTab);


// Cetvrti

function createTable (rows, columns) {
    const tabela = document.createElement('table')
  
    for (let i = 1; i < rows + 1; i++) {
      const tr = document.createElement('tr')
  
      for (let j = 1; j < columns + 1; j++) {
        const td = document.createElement('td')
        ID = i*j;
        td.setAttribute('id', 'ID')
        td.innerHTML = Math.floor(Math.random() * 10)
        tr.appendChild(td)
      }
  
      tabela.appendChild(tr)
    }
  
    return document.getElementById('table').appendChild(tabela)
}

createTable(3, 5)

function tableClick(event){
    if(event.target.tagName == 'TD'){
        alert()
    }
}

document.getElementById('table').addEventListener('click', tableClick)



// Peti

function digitalWatch(){
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    document.getElementById('watch').innerHTML = hours + ':' + minutes + ':' + seconds;
}

setInterval(digitalWatch, 1000);


// Sesti

function stopwatch(){

}



// Deveti

function getRandomColor(){
    let red = Math.ceil(Math.random() * 256);
    let green = Math.ceil(Math.random() * 256);
    let blue = Math.ceil(Math.random() * 256);
  
    let color = `rgb(${red}, ${green}, ${blue})`;
  
    return color;
}

function getRadnomSize(){
    let size = Math.ceil(Math.random()*20 + 180) + 'px';
    return size;
}

function getLeftMargin(ballDimension){
    let leftMargin = Math.floor(Math.random()*500 - ballDimension) + 'px';
    return leftMargin
}

function getTopMargin(ballDimension){
    let topMargin = Math.floor(Math.random()*500 - ballDimension) + 'px';
    return topMargin;
}

function ball(){
    document.getElementById('loptica1').style.color = getRandomColor();
    document.getElementById('loptica2').style.color = getRandomColor();
    document.getElementById('loptica3').style.color = getRandomColor();
    document.getElementById('loptica4').style.color = getRandomColor();
    document.getElementById('loptica5').style.color = getRandomColor();

    document.getElementById('loptica1').style.width = getRadnomSize();
    document.getElementById('loptica1').style.height = document.getElementById('loptica1').style.width;
    document.getElementById('loptica2').style.width = getRadnomSize();
    document.getElementById('loptica2').style.height = document.getElementById('loptica2').style.width;
    document.getElementById('loptica3').style.width = getRadnomSize();
    document.getElementById('loptica3').style.height = document.getElementById('loptica3').style.width;
    document.getElementById('loptica4').style.width = getRadnomSize();
    document.getElementById('loptica4').style.height = document.getElementById('loptica4').style.width;
    document.getElementById('loptica5').style.width = getRadnomSize();
    document.getElementById('loptica5').style.height = document.getElementById('loptica5').style.width;

    document.getElementById('loptica1').style.marginLeft = getLeftMargin(document.getElementById('loptica1').style.width);
    document.getElementById('loptica1').style.marginTop = getTopMargin(document.getElementById('loptica1').style.height);
    document.getElementById('loptica2').style.marginLeft = getLeftMargin(document.getElementById('loptica2').style.width);
    document.getElementById('loptica2').style.marginTop = getTopMargin(document.getElementById('loptica2').style.height);
    document.getElementById('loptica3').style.marginLeft = getLeftMargin(document.getElementById('loptica3').style.width);
    document.getElementById('loptica3').style.marginTop = getTopMargin(document.getElementById('loptica3').style.height);
    document.getElementById('loptica4').style.marginLeft = getLeftMargin(document.getElementById('loptica4').style.width);
    document.getElementById('loptica4').style.marginTop = getTopMargin(document.getElementById('loptica4').style.height);
    document.getElementById('loptica5').style.marginLeft = getLeftMargin(document.getElementById('loptica5').style.width);
    document.getElementById('loptica5').style.marginTop = getTopMargin(document.getElementById('loptica5').style.height);
}

ball();