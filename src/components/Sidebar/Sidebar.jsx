import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to={'/About'}>About</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar