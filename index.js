const array = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000))

console.log(array)

const arrayMin = array => {
    let min = Infinity
    array.forEach(element => {
        if (element < min) min = element
    })
    return min
}

console.log(arrayMin(array))

const arrayMax = array => {
    let max = -Infinity
    array.forEach(element => {
        if (element > max) max = element
    })
    return max
}

console.log(arrayMax(array))

const quickSort = array => {
    if (array.length < 2) return array;
    const pivotIndex = Math.floor(Math.random() * array.length)
    let pivot = array[pivotIndex]
    const left = [];
    const right = [];

    for (let i = 0; i < array.length; i++) {
        if (i === pivotIndex) continue
        if (pivot > array[i]) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

const arrayMedian = array => {
    // const sortedArray = array.sort((a, b) => a - b)
    const sortedArray = quickSort(array)
    const mid = Math.ceil(array.length / 2)
    return array.length % 2 === 0 ? (sortedArray[mid] + sortedArray[mid + 1]) / 2 : sortedArray[mid]
}

console.log(arrayMedian(array))

console.log(quickSort(array))
console.log(array.sort((a, b) => a - b))

const countTags = () => {
    const allTags = document.getElementsByTagName('*')
    const counts = {}
    for (let i = 0; i < allTags.length; i++) {
        counts[allTags.item(i).tagName] = (counts[allTags.item(i).tagName] || 0) + 1
    }
    return counts
}

console.log(countTags())

/**********************************************************************************************************************/

function changeImage() {
    if (document.getElementById('image').src === 'http://localhost:63343/Portfolio/img/portrait.JPG') {
        document.getElementById('image').src = 'img/real_face.jpeg'
    } else {
        document.getElementById('image').src = 'img/portrait.JPG'
    }
}

/**********************************************************************************************************************/

const evil = (fn) => {
    return new Function('return ' + fn)()
}

const generateMessage = () => {
    const adjectives = ['Brave', 'Calm', 'Happy', 'Lazy', 'Fat']
    const nouns = ['life', 'fire', 'cat', 'dog', 'boy']
    const verbs = ['die', 'close', 'fix', 'enjoy', 'want']
    return adjectives[Math.floor(Math.random() * adjectives.length)] + ' ' +
        nouns[Math.floor(Math.random() * nouns.length)] + ' ' +
        verbs[Math.floor(Math.random() * verbs.length)]
}

const popup = document.querySelector('.chat-popup')
const chatButton = document.querySelector('.chat-btn')

chatButton.addEventListener('click', () => {
    popup.classList.toggle('show')
})

const submitButton = document.querySelector('.submit')
const chatArea = document.querySelector('.chat-area')
const input = document.querySelector('input')

const removeParent = (element) => {
    element.parentNode.style.display = 'none'
}

submitButton.addEventListener('click', () => {
    if (input.value === '') return
    let userInput = input.value
    input.value = ''
    let tmp = `<div class="out-msg"><span class="my-msg">${userInput}</span><button onclick="removeParent(this)">x</button></div>`
    chatArea.insertAdjacentHTML('beforeend', tmp)
    tmp = `<div class="income-msg"><span class="msg">${generateMessage()}</span><button onclick="removeParent(this)">x</button></div>`
    chatArea.insertAdjacentHTML('beforeend', tmp)
})



