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
            className={`hover:border-primary flex rounded border-2 border-white p-2 transition-all`}
        >
            {({ isActive }) => (
                <>
                    <img
                        className="w-6"
                        src={isActive ? iconDark : icon}
                        alt={alt}
                    />
                    <p
                        className={`ml-1 hidden hover:text-gray-800 md:block ${isActive ? 'text-primary font-bold' : ''}`}
                    >
                        {title}
                    </p>
                </>
            )}
        </NavLink>
    )
}
export default NavItem
