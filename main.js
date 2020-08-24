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