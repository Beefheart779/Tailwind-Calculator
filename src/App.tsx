import './App.css'
import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'
import { useRef, useState } from 'react'

import { Calculator, roundToMaxDigits } from './calculatorClass'

const buttonValues: Array<string[]> = [
    ['C', '+-', '%', '/'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
]
const updateDisplay = (
    value: string | number,
    display: string,
    setDisplay: React.Dispatch<React.SetStateAction<string>>
) => {
    if (display.length < 13) {
        const newValue = display === '0' ? value : `${display}${value}`
        console.log(display, newValue)
        setDisplay(newValue.toString())
    }
}
function App() {
    const [display, setDisplay] = useState('0')
    const calculator = useRef(new Calculator())

    const handleButtonClick = (value: string) => {
        console.log('calculator', calculator)
        if (['+', '-', 'X', '/'].includes(value as string)) {
            calculator.current?.setOperator(value as string)
            calculator.current?.setOperand(parseFloat(display))
            calculator.current?.calculate()
            setDisplay(calculator.current.total.toString())
        } else if (value === '=') {
            calculator.current.setOperand(parseFloat(display))
            calculator.current?.calculate()
            setDisplay(calculator.current.total.toString())
        } else if (value === 'C') {
            calculator.current.clear()
            setDisplay('0')
        } else if (value === '+-') {
            const newDisplay = calculator.current?.invert(display).toString()
            setDisplay(newDisplay)
        } else if (value === '%') {
            const newDisplay = calculator.current?.togglePercentSign(display)
            setDisplay(newDisplay)
        } else if (value === '.') {
            const newDisplay = calculator.current?.setDecimal(display)
            if (newDisplay) setDisplay(newDisplay)
        } else {
            setDisplay((prevDisplay) =>
                prevDisplay === '0' ? value : prevDisplay + value
            )
           
        }
    }
    return (
        <div className="h-screen pt-20 flex justify-center bg-neutral-200">
            <Wrapper>
                <Screen value={display} />
                <ButtonBox>
                    {buttonValues.flat().map((btnValue, idx) => {
                        return (
                            <Button
                                key={idx}
                                value={btnValue}
                                onClick={() => {
                                    handleButtonClick(btnValue)
                                }}
                                isEquals={btnValue === '='}
                            />
                        )
                    })}
                </ButtonBox>
            </Wrapper>
        </div>
    )
}

export default App
