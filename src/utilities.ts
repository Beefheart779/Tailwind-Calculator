export const btnValues = [
    ['C', '+-', '%', '/'],
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '='],
]
export const roundToMaxDigits = (num: number, maxDigits = 10) => {
    console.log('called')
    if (typeof num !== 'number' || isNaN(num)) {
        return NaN
    }

    let str = num.toString()

    if (str.replace(/[-.]/g, '').length <= maxDigits) {
        return num
    }

    let availableDigits =
        maxDigits - (num < 0 ? 1 : 0) - (num % 1 !== 0 ? 1 : 0)

    let cutDigits = str.replace(/[-.]/g, '').length - availableDigits

    if (num % 1 !== 0) {
        return parseFloat(
            num.toFixed(Math.max(0, str.split('.')[1].length - cutDigits))
        )
    } else {
        return (
            Math.round(num / Math.pow(10, cutDigits)) * Math.pow(10, cutDigits)
        )
    }
}
