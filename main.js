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

