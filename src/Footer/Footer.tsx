const Footer = () => {

    const year = new Date().getFullYear();
        return (
        <div className="footer">
            <p>&copy;{year} evan-desu</p>
        </div>
    );
}
 
export default Footer;