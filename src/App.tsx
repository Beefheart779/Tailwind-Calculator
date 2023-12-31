import './App.css'
import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'
import { useState } from 'react'
import { btnValues, roundToMaxDigits } from './utilities'
import { CalcState } from './types'


const App: React.FC = () => {
    const [calc, setCalc] = useState<CalcState>({
        current: '',
        previous: null,
        operator: null,
    })

    const handleNumber = (value: string) => {
        if (calc.current.length < 15) {
            setCalc({
                ...calc,
                current:
                    calc.current === '0' ? value : `${calc.current}${value}`,
            })
        }
    }
    const handlePercent = () => {
        if (!calc.current.includes('%')) {
            const percent = (Number(calc.current) / 10).toString()
            setCalc({ ...calc, current: percent })
        }
    }
    const handleInvert = () => {
        const currNum = Number(calc.current)
        console.log('currNum', currNum)
        const invertedNum = (-currNum).toString()
        setCalc({ ...calc, current: invertedNum })
    }
    const handleDecimal = () => {
        if (!calc.current.includes('.')) {
            setCalc({ ...calc, current: `${calc.current}.` })
        }
    }
    const handleOperator = (value: string) => {
        setCalc({
            previous: calc.current,
            current: '',
            operator: value,
        })
    }

    const handleEquals = () => {
        let result: number | string = calc.current
        if (calc.previous && calc.current && calc.operator) {
            const a = parseFloat(calc.previous)
            const b = parseFloat(calc.current)

            switch (calc.operator) {
                case '+':
                    result = a + b
                    break
                case '-':
                    result = a - b
                    break
                case 'X':
                    result = a * b
                    break
                case '/':
                    if (b === 0) {
                        result = "Can't divide by 0"
                    } else {
                        result = a / b
                    }
                    break
                default:
                    break
            }
        }
        const roundedResult = roundToMaxDigits(Number(result))
        setCalc({
            previous: null,
            current: roundedResult.toString(),
            operator: null,
        })
    }

    const handleReset = () => {
        setCalc({ current: '', previous: null, operator: null })
    }

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-t from-amber-800">
            <Wrapper>
                <Screen value={calc.current || calc.previous || '0'} />
                <ButtonBox>
                    {btnValues.flat().map((btn, i) => (
                        <Button
                            key={i}
                            value={btn}
                            onClick={
                                btn === 'C'
                                    ? handleReset
                                    : btn === '='
                                    ? handleEquals
                                    : btn === '+-'
                                    ? handleInvert
                                    : btn === '%'
                                    ? handlePercent
                                    : btn === '.'
                                    ? handleDecimal
                                    : btn === '/' ||
                                      btn === 'X' ||
                                      btn === '-' ||
                                      btn === '+'
                                    ? () => handleOperator(btn.toString())
                                    : () => handleNumber(btn.toString())
                            }
                            isEquals={btn === '='}
                        />
                    ))}
                </ButtonBox>
            </Wrapper>
        </div>
    )
}

export default App
