import { Link } from 'react-router-dom';
import ImageOwen from '../images/imageOwen.jpg';
import '../styles/components/Header.scss';

const Header = () => {
    return (
        <Link to='/'>
        <header className="header">
        <img className="header__imageHeader" 
        src={ImageOwen} 
        alt="Owen Wilson"/>
        </header>
        </Link>
    );
};

export default Header;
