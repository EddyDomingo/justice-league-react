import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div>
           <ul>
                <li><Link class="active" to="/">Home</Link></li>
                <li><Link to="/AddHero">Create Hero</Link></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
           </ul> 
        </div>
     );
}
 
export default NavBar;