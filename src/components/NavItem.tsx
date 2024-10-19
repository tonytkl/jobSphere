import { NavLink } from 'react-router-dom'

type Props = {
    title: string
    link: string
    icon: string
    iconDark: string
    alt: string
}

const NavItem = ({ title, link, icon, iconDark, alt }: Props) => {
    return (
        <NavLink
            to={link}
            className={({ isActive }) =>
                `flex rounded border-2 p-2 transition-all ${
                    isActive ? 'border-black' : 'border-white'
                } hover:border-black`
            }
        >
            {({ isActive }) => (
                <>
                    <img
                        className="w-6"
                        src={isActive ? iconDark : icon}
                        alt={alt}
                    />
                    <p className="ml-1 hidden text-blue-500 hover:text-blue-700 md:block">
                        {title}
                    </p>
                </>
            )}
        </NavLink>
    )
}
export default NavItem
