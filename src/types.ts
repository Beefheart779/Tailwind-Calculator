import { MouseEvent } from 'react'

export type ChildrenProps = {
    children: React.ReactNode
}

export type ScreenProps = {
    value: string
}

export type ButtonProps = {
    value: string | number
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
    isEquals: boolean
}

export type CalcState = {
    current: string
    previous: string | null
    operator: string | null
}
