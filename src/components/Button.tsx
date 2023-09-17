import { useState } from 'react'
import { ButtonProps } from '../types'

const Button = ({ value, onClick, isEquals }: ButtonProps) => {
    const [isClicked, setIsClicked] = useState(false)

    const commonClasses =
        'w-full h-12 text-2xl font-bold rounded-md flex items-center justify-center'
    const colorClasses = isClicked
        ? 'bg-white text-black'
        : isEquals
        ? 'bg-amber-300 text-white'
        : 'bg-black text-white'
    const gridClasses = isEquals ? 'col-start-3 col-end-5' : ''

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsClicked(true)
        onClick(event)
        setTimeout(() => {
            setIsClicked(false)
        }, 100)
    }

    return (
        <button
            className={`${commonClasses} ${colorClasses} ${gridClasses}`}
            onClick={handleButtonClick}
        >
            {value + ''}
        </button>
    )
}

export default Button
