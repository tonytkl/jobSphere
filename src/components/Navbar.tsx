import NavItem from './NavItem'
import { Link } from 'react-router-dom'

const Nabvbar = () => {
    return (
        <nav className="flex w-full p-3">
            <Link to="/">
                <img src="logo.png" alt="Job Tracker" className="w-40" />
            </Link>
            <div className="grow"></div>
            <ul className="flex space-x-6 pr-5">
                <li>
                    <NavItem
                        title="Home"
                        link="/"
                        icon="home.png"
                        iconDark="home_d.png"
                        alt="Home icon"
                    />
                </li>
                <li>
                    <NavItem
                        title="Dashboard"
                        link="/dashboard"
                        icon="dashboard.png"
                        iconDark="dashboard_d.png"
                        alt="Dashboard icon"
                    />
                </li>
            </ul>
        </nav>
    )
}

export default Nabvbar
