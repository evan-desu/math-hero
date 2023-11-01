import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    function handleHomeClick() {
        navigate('/');
    };

    function handleLanguageChange(event: React.ChangeEvent<HTMLSelectElement>) {
        i18n.changeLanguage(event.target.value);
    }

    return (
        <nav className="navbar-container">
            <h3 className="navbar-math-hero"onClick={handleHomeClick}>Math Hero</h3>
            <section className="navbar-links">
                <h3 className="navbar-link" onClick={handleHomeClick}>Home</h3>
                <h3 className="navbar-link">About</h3>
                <select 
                    id="languages" 
                    className="navbar-link"
                    value={i18n.language}
                    onChange={handleLanguageChange}
                >
                        <option value="en">En</option>
                        <option value="ja">Ja</option>
                </select>
            </section>
        </nav>
    );
}
 
export default Navbar;