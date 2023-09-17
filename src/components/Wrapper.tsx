import { ChildrenProps } from '../types'

const Wrapper = ({ children }: ChildrenProps) => {
    return (
        <div className="w-80 h-4/6 p-10 rounded-xl bg-amber-700 flex flex-col ">
            {children}
        </div>
    )
}

export default Wrapper
