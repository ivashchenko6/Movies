import { Link } from 'react-router-dom';
import './header.scss';


const Header =  () => {

    return (
        <Link to="/" className='title'>Movie Data Base</Link>
    )
}

export default Header;