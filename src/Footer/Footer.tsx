import './Footer.css'

const Footer = () => {

    const year = new Date().getFullYear();
        return (
        <div className="footer">
            <p>&copy;{year} Evan Peterson</p>
        </div>
    );
}
 
export default Footer;