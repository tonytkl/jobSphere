import NavItem from './NavItem'
import { Link } from 'react-router-dom'

const Nabvbar = () => {
    return (
        <nav className="flex w-full p-3">
            <Link to="/">
                <span className="font-mono text-3xl font-bold underline">
                    LOGO
                </span>
            </Link>
            <div className="grow"></div>
            <ul className="flex space-x-6 pr-5">
                <li>
                    <NavItem
                        title="Home"
                        link="/"
                        icon="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
                        iconDark="https://cdn-icons-png.flaticon.com/512/1946/1946436.png"
                        alt="Home icon"
                    />
                </li>
                <li>
                    <NavItem
                        title="Dashboard"
                        link="/dashboard"
                        icon="https://cdn-icons-png.flaticon.com/512/1828/1828765.png"
                        iconDark="https://cdn-icons-png.flaticon.com/512/1828/1828791.png"
                        alt="Dashboard icon"
                    />
                </li>
            </ul>
        </nav>
    )
}

export default Nabvbar
