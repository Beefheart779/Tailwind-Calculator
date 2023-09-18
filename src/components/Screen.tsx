import { ScreenProps } from '../types'

const Screen = ({ value }: ScreenProps) => {
    return (
        <div className="h-1/5 w-full text-[8vw] rounded-lg flex flex-wrap justify-end items-center bg-zinc-900 font-bold font-sans text-white px-2 overflow-hidden  sm:text-[5vw] md:text-[5vw] lg:text-5xl pr-3 pl-3">
            {value}
        </div>
    )
}

export default Screen
