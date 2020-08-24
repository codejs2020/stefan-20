// Prvi

function formatNumber (num, numOfZeros){
    let br = num + '';
    let zeros = '';

    for (let i=0; i<numOfZeros-br.length; i++){
        zeros += '0'
    }

    console.log(zeros + br)
}

formatNumber(99, 3)