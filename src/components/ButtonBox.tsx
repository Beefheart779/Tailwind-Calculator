import { ChildrenProps } from '../types'

const ButtonBox = ({ children }: ChildrenProps) => {
    return (
        <div className="flex items-center justify-center h-4/6 w-full mt-6 grid grid-rows-5 grid-cols-4 gap-x-2 gap-y-8 place-items-center ">
            {children}
        </div>
    )
}

export default ButtonBox
