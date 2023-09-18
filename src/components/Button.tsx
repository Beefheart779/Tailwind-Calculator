import { useState } from 'react'
import { ButtonProps } from '../types'

const Button = ({ value, onClick, isEquals }: ButtonProps) => {
    const [isClicked, setIsClicked] = useState(false)

    const commonClasses =
        'text-[10vw] font-bold flex items-center justify-center rounded-md  sm:text-[6vw] md:text-5xl lg:text-5xl'
    const colorClasses = isClicked
        ? 'bg-white text-black w-full h-full'
        : isEquals
        ? 'w-full h-full bg-amber-200 text-black hover:bg-amber-200/75 '
        : 'w-full h-full bg-black text-white  sm:w-full sm:h-full md:w-full md:h-full hover:bg-black/75'
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
