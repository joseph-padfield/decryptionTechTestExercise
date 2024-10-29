const decryptForm = document.getElementById("decrypt-form")
const decryptInput = document.getElementById('code-input')
const encryptForm = document.getElementById("encrypt-form")
const encryptInput = document.getElementById('message-input')
const result = document.querySelector('.result')

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

decryptForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const encryptedArray = decryptInput.value.split(' ')
    const encryptedArrayNumeric = encryptedArray.map((item) => {
        return parseInt(item)
    })
    const containsNan = (array) => {
        return array.some(isNaN)
    }
    if (containsNan(encryptedArrayNumeric) === true) {
        decryptInput.value = ""
        result.textContent = "Encrypted messages may only contain numbers"
        return false
    }

    result.textContent = "Decrypted message: " + decrypt(encryptedArray)
})

encryptForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const message = encryptInput.value
    message.split('').forEach((item) => {
        if (!letters.includes(item.toLowerCase()) && item !== ' ') {
            result.textContent = "Messages can only contain letters from a-z"
            encryptInput.value = ""
        }
        else {
            result.textContent = "Encrypted message: " + encrypt(message).join(' ')
        }
    })
})

const numToChar = {}

letters.forEach(letter => {
    numToChar[letters.indexOf(letter) + 8] = letter
})

const decrypt = (array) => {
    let res = ''
    array.forEach((item) => {
        if (item <= 33 && item >= 8) {
            res += numToChar[item]
        } else if (item < 8) {
            res += ' '
        } else {
            let reduced = item / 27
            while (reduced > 33) {
                reduced /= 27
            }
            reduced < 8 ? res += ' ' : res += numToChar[reduced]
        }
    })
    return res
}

const charToNum = {}

letters.forEach(letter => {
    charToNum[letter] = letters.indexOf(letter) + 8
})

const encrypt = (str) => {

    let res = []
    const array = str.toLowerCase().split('')
    array.forEach((item) => {
        if (item === ' ') {
            let space = Math.floor((Math.random() * 8)) * Math.pow(27, Math.floor((Math.random() * 10)))
            space === 27 ? space = (Math.floor(space/27)) : space = space
            res.push(space)
        } else {
            res.push(charToNum[item] * Math.pow(27, Math.floor((Math.random() * 10))))
        }
    })
    return res
}
