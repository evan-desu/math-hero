import { useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate();

    function handleHomeClick() {
        navigate('/');
    };

    return (
        <nav className="navbar-container">
            <h3 className='navbar-link' onClick={handleHomeClick}>Math Hero</h3>
            <section className="navbar-links">
                <h3 className='navbar-link' onClick={handleHomeClick}>Home</h3>
                <h3 className='navbar-link'>About</h3>
            </section>
        </nav>
    );
}
 
export default Navbar;