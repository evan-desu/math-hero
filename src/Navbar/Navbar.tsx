import { useNavigate } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate();

    function handleHomeClick() {
        navigate('/');
    };

    return (
        <nav className="navbar-container">
            <h3 className='navbar-math-hero' onClick={handleHomeClick}>Math Hero</h3>
            <section className="navbar-links">
                <h3 className='navbar-link' onClick={handleHomeClick}>Home</h3>
                <h3 className='navbar-link'>About</h3>
                <LanguageSwitcher />
            </section>
        </nav>
    );
}
 
export default Navbar;