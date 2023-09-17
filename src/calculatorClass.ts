export class Calculator {
    total: number
    operand: number | null
    operator: string | null
    firstOperation: boolean

    constructor() {
        this.total = 0
        this.operand = null
        this.operator = null
        this.firstOperation = true
    }
    setOperator(operator: string) {
        this.operator = operator
    }

    setOperand(operand: number) {
        this.operand = operand
    }

    calculate() {
        console.log(
            `Calculating: ${this.total} ${this.operator} ${this.operand}`
        )
        if (this.firstOperation && this.operand !== null) {
            this.total = this.operand
            this.firstOperation = false
            return
        }
        if (this.operator && this.operand !== null) {
            switch (this.operator) {
                case '+':
                    this.total += this.operand
                    break
                case '-':
                    this.total -= this.operand
                    break
                case 'X':
                    this.total *= this.operand
                    break
                case '/':
                    if (this.operand !== 0) {
                        this.total /= this.operand
                    }
                    break
                default:
                    break
            }
            console.log(`Result: ${this.total}`)
        }
    }

    invert(num: string): number {
        return -Number(num)
    }
    setDecimal(num: string): string | undefined {
        if (!num.includes('.')) {
            return `${num}.`
        } else if (num[num.length - 1] === '.') {
            return num.slice(0, -1)
        }
        return
    }
    togglePercentSign(num: string): string {
        if (num[num.length - 1] !== '%') return `${num}%`

        return num.slice(0, -1)
    }
    clear(): undefined {
        this.total = 0
        return
    }
}

export const roundToMaxDigits = (num: number, maxDigits = 13) => {
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
