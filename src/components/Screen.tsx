import { ScreenProps } from '../types'

const Screen = ({ value }: ScreenProps) => {
    return (
        <div className="h-24 w-full rounded-lg flex flex-wrap justify-end items-center bg-zinc-900 font-bold font-sans text-white text-2xl px-2 overflow-hidden ">
            {value}
        </div>
    )
}

export default Screen
