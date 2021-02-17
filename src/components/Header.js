import logo from '../assets/logo.png';
import profile from '../assets/profile.png';
import {NavLink,Link} from 'react-router-dom';
const Header = () =>{
    return (
        <header>
            <div className="left-section">
                <div className="logo">
                    <Link to="/"><img src={logo}></img></Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/packges" exact={true} activeClassName='is-active'>Packages</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">ContactUs</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            
            <div className="profile">
                <span>
                    Abdulah Al Kahtani
                </span>
                <img src={profile}></img>
            </div>
        </header>
    );
}

export default Header;