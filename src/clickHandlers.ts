import {
    DecimalClickHandler,
    EqualsClickHandler,
    InvertClickHandler,
    NumClickHandler,
    PercentClickHandler,
    ResetClickHandler,
    SignClickHandler,
} from './types'

export const numClickHandler: NumClickHandler = (e, calc, setCalc) => {}

const equals = (num: string, res: string, sign: string) => {}

export const decimalClickHandler: DecimalClickHandler = (calc, setCalc) => {}

export const invertClickHandler: InvertClickHandler = (calc, setCalc) => {}

export const percentClickHandler: PercentClickHandler = (calc, setCalc) => {}

export const resetClickHandler: ResetClickHandler = (calc, setCalc) => {
    setCalc({ sign: '', num: '0', res: '0' })
}
