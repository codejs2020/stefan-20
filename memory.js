//const cardNumbers = generateTable(3, 4)

function generateTable(rows, columns) {
    const listOfCards = []
    let arr = numbersArray(rows, columns);

    for (let i = 0; i < rows; i++) {
        listOfCards[i] = [];
        for (let j = 0; j < columns; j++) {
            arr = shuffle(arr);
            listOfCards[i][j] = arr[j];
        }
    }

    return listOfCards;
}

console.log(generateTable(3, 4))

function drawTable(rows, columns){
    const card = document.createElement('div');

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            card.textContent = 
            document.getElementById('frame').appendChild(card);
        }
    }
}

function numbersArray(x, y) {
    let niz = []
    let randomIndex;

    for (let i = 0; i < x * y / 2; i++) {
        niz[i] = i;
    }
    niz += niz;

    return niz;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  