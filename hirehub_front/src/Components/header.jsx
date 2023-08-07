import { Link } from 'react-router-dom'
import Logo from '../Assets/Logo_Hire_Hub.png'
import '../Styles/Header.css'


function Header(){
    return(
        <div className='Header'>
            
            <Link to='/' className='logo'>
                {/* <img src={Logo} className='Logo' alt="Logo avec nom"/> */}
            </Link>

            <div></div>

            <nav className='nav_btn'>
                <Link className='Btn' to="/Arrival">Arrivé</Link>
                <Link className='Btn' to="/Deppart">Départ</Link>
                <Link className='Btn' to='/'>Archive ▼</Link>
                <Link className='Btn' to='/'> Account ▼</Link>
            </nav>
        </div>
    )
}
export default Header;