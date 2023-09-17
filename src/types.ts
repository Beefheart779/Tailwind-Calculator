import { MouseEvent } from 'react'

export type ChildrenProps = {
    children: React.ReactNode
}

export type ScreenProps = {
    value: number | string
}

export type ButtonProps = {
    value: string | number
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
    isEquals: boolean
}

export interface CalcState {
    sign: string
    num: string
    res: string
}

export type SetCalc = React.Dispatch<React.SetStateAction<CalcState>>

export type NumClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    calc: CalcState,
    setCalc: SetCalc
) => void
export type EqualsClickHandler = (calc: CalcState, setCalc: SetCalc) => void
export type SignClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    calc: CalcState,
    setCalc: SetCalc
) => void
export type DecimalClickHandler = (calc: CalcState, setCalc: SetCalc) => void
export type InvertClickHandler = (calc: CalcState, setCalc: SetCalc) => void
export type PercentClickHandler = (calc: CalcState, setCalc: SetCalc) => void
export type ResetClickHandler = (calc: CalcState, setCalc: SetCalc) => void
