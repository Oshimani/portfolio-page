import Link from 'next/link'
import { type FC, type ReactNode, type HTMLAttributes } from 'react'

const Navigation = () => {
    return (
        <div className="flex flex-row py-8">

            <nav className='flex flex-row gap-4'>
                <NavLink href="/">Home</NavLink>
                <NavMenu href="/showcase"
                    menuChildren={[
                        <NavLink className="text-lg block w-full" key="ff" href="/showcase/fancy-form">Fancy Form</NavLink>,
                        <NavLink className="text-lg block w-full" key="ff" href="/showcase/fancy-form">Time Tracker</NavLink>,
                        <NavLink className="text-lg block w-full" key="ff" href="/showcase/fancy-form">Steam Screenshot Backup</NavLink>,
                        <NavLink className="text-lg block w-full" key="ff" href="/showcase/fancy-form">MTB-Classification with Keras</NavLink>
                    ]}
                >
                    Showcase
                </NavMenu>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/education">Education & Worklife</NavLink>
                <NavLink href="/about">About</NavLink>
            </nav>
        </div>
    )
}

export default Navigation

const NavLink: FC<{ href: string, children: ReactNode } & HTMLAttributes<HTMLAnchorElement>> = (props) => {
    const { href, children, className, ...rest } = props

    return (
        <Link {...rest}
            className={`px-4 py-1 text-4xl font-thin text-[#fccc4c] link-hover ${className}`}
            href={href}
        >
            {children}
        </Link>
    )
}

const NavMenu: FC<{ href: string, children: ReactNode, menuChildren: ReactNode[] }> = (props) => {
    const { children, href, menuChildren } = props
    return (
        <div className="relative">
            <NavLink className="peer block" href={href}>{children}</NavLink>
            <div className="transition-opacity opacity-0 pointer-events-none peer-hover:pointer-events-auto hover:pointer-events-auto hover:opacity-100 peer-hover:opacity-100 absolute top-12 left-0 right-0 z-10">
                <ul className="bg-black bg-opacity-50 backdrop-blur-sm text-center rounded-lg">
                    {menuChildren.map((item, i) => (<li className="w-full py-6" key={i}>{item}</li>))}
                </ul>
            </div>
        </div>
    )
}