import "./nav.scss";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <ul>
                <li><NavLink class="active" exact to="/">Home</NavLink></li>
                <li><NavLink to="/product">Product</NavLink></li>
                <li><NavLink to="/weather">Weather App</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    )
}

export default Nav;