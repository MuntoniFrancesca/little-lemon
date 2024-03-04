import React from "react";
import Logo from '../img/Logo.svg';

function Footer() {
    return (
    <footer>
        <img src={Logo} alt="Little Lemon Logo"></img>
        <ul>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/socialmedia">Social Media</a></li>
        </ul>
    </footer>
    )
}

export default Footer;