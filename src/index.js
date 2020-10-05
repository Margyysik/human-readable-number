const number3 = {
    '9': 'ninety',
    '8': 'eighty',
    '7': 'seventy',
    '6': 'sixty',
    '5': 'fifty',
    '4': 'forty',
    '3': 'thirty',
    '2': 'twenty'
}

const number2 = {
    '19': 'nineteen',
    '18': 'eighteen',
    '17': 'seventeen',
    '16': 'sixteen',
    '15': 'fifteen',
    '14': 'fourteen',
    '13': 'thirteen',
    '12': 'twelve',
    '11': 'eleven',
    '10': 'ten'
}

const number1 = {
    '9': 'nine',
    '8': 'eight',
    '7': 'seven',
    '6': 'six',
    '5': 'five',
    '4': 'four',
    '3': 'three',
    '2': 'two',
    '1': 'one',
}

module.exports = function toReadable (number) {
    if (number==0){
        return 'zero'
    }
    if (number< 10 && number>0){
        return number1[number]
    }else if(number<20){
        return number2[number]
    }else if(number<100){
        const massiv = number.toString().split('')
        if (massiv[1]==0){
            return number3[massiv[0]]
        }else{
            return number3[massiv[0]]+' '+number1[massiv[1]]
        }
    }else if(number<1000){
        const massiv = number.toString().split('')
        if (massiv[2]==0 && massiv[1]==0){
            return number1[number.toString().slice(0,1)] + ' hundred'
        }else{
            return number1[number.toString().slice(0,1)] + ' hundred ' + toReadable(parseInt(number.toString().slice(1,3)))
        }

    }
    if(number === 0){
        return 'zero'
    }
}
