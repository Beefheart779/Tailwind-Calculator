import { ChildrenProps } from '../types'

const ButtonBox = ({ children }: ChildrenProps) => {
    return (
        <div className="h-4/6 flex items-center justify-center w-full mt-16 grid grid-rows-5 grid-cols-4 gap-y-4  gap-x-4 place-items-center ">
            {children}
        </div>
    )
}

export default ButtonBox
