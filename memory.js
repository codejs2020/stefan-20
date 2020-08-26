//const cardNumbers = generateTable(3, 4)

const data = generateTable(3, 4)

drawTable(3, 4, data)
let temp = ''
function clickOnTable(event) {
    if (event.target.tagName == 'DIV' && !event.target.classList.contains('locked')) {
        const element= event.target
        element.classList.add('visible')
        if (temp !== '') {
            setTimeout(() => {
                if (element.textContent === temp) {
                    document.querySelector('.visible').classList.add('locked')
                    document.querySelector('.visible').classList.remove('visible')
                    
                    document.querySelector('.visible').classList.add('locked')
                    document.querySelector('.visible').classList.remove('visible')
                        
                } else {
                    document.querySelector('.visible').classList.remove('visible')
                    document.querySelector('.visible').classList.remove('visible')
                }
                temp = ''
                console.log('a')
            },1000)
        } else {
            temp = element.textContent
            console.log('b')

        }
    }
}

document.getElementById('frame').addEventListener('click',clickOnTable)

function generateTable(rows, columns) {
    let arr = numbersArray(rows, columns);
    return shuffle(arr)
}

function drawTable(rows, columns,data){
    let index =0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const card = document.createElement('div');
            card.textContent = data[index++]
            document.getElementById('frame').appendChild(card);
        }
    }
}

function numbersArray(x, y) {
    let niz = []
    let randomIndex;

    for (let i = 0; i < x * y / 2; i++) {
        niz.push(i)
        niz.push(i)
    }

    return niz;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  