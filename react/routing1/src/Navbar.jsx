import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar(){
    return(
        <nav>
            <Link to='/' >Home</Link> &emsp;|&emsp;
            <Link to="/aboutus">About Us</Link> &emsp;|&emsp;
            <Link to="/todos">Todos</Link>
        </nav>
    )

}
export default Navbar;