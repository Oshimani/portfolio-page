import React, { type ReactNode, type FC } from 'react'

const Aside: FC<React.HTMLAttributes<HTMLElement> & { children: ReactNode }> = (props) => {
    const { children, ...rest } = props
    return (
        <div {...rest}>
            <div className="px-8 py-4 rounded-lg bg-black bg-opacity-50 backdrop-blur-sm text-[#fccc4c]">
                {children}
            </div>
        </div>
    )
}

export default Aside

export const AsideHeader: FC<React.HTMLAttributes<HTMLElement> & { children: ReactNode }> = (props) => {
    const { children, ...rest } = props
    return (
        <h2 className="text-2xl font-thin mb-8 pb-2 border-solid border-b-2 border-[#fccc4c] text-center" {...rest}>
            {children}
        </h2>
    )
}

export const AsideFooter: FC<React.HTMLAttributes<HTMLElement> & { children: ReactNode }> = (props) => {
    const { children, ...rest } = props
    return (
        <div {...rest}>
            <div className="mt-8 pt-2 text-[#7b96b1] text-sm font-bold text-center border-solid border-t-2 border-[#fccc4c]">
                {children}
            </div>
        </div>
    )
}
