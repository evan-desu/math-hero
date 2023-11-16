import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ukFlag from '../assets/images/uk_flag.png';
import jpFlag from '../assets/images/jp_flag.png';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    function handleHomeClick() {
        navigate('/');
    };

    // function handleLanguageChange(event: React.ChangeEvent<HTMLSelectElement>) {
    //     i18n.changeLanguage(event.target.value);
    // }

    function handleLanguageChange(lang: any) {
        i18n.changeLanguage(lang);
    }

    return (
        <nav className="navbar-container">
            <h3 className="navbar-math-hero"onClick={handleHomeClick}>Math Hero</h3>
            <section className="navbar-links">
            <h3 className="navbar-link" onClick={handleHomeClick}>{t("navbar.home")}</h3>
                <h3 className="navbar-link">{t("navbar.about")}</h3>
                <img 
                    src={ukFlag} 
                    alt="UK Flag" 
                    onClick={() => handleLanguageChange('en')} 
                    className="language-button" 
                    width="25"
                />
                <img 
                    src={jpFlag} 
                    alt="Japan Flag" 
                    onClick={() => handleLanguageChange('ja')} 
                    className="language-button" 
                    width="25"
                />
            </section>
        </nav>
    );
}
 
export default Navbar;