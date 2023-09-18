import { ChildrenProps } from '../types'

const Wrapper = ({ children }: ChildrenProps) => {
    return (
        <div className="bg-amber-800 h-full w-full min-h-[450px] min-w-[300px] sm:h-5/6 sm:w-4/6 md:w-4/6 lg:w-[600px] xl:w-[600px] rounded-lg p-2 flex flex-col px-4 pt-6 drop-shadow-2xl">
            {children}
        </div>
    )
}

export default Wrapper
