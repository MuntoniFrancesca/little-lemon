import React from "react";
import logo from '../images/Logo.svg'

function Footer() {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt=''></img>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Menu</a></li>
            <li><a href='/'>Reservation</a></li>
            <li><a href='/'>Order Online</a></li>
            <li><a href='/'>Login</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address: <br /> 123 Chicago, Illinois</li>
            <li>Phone: <br /> 123 456 7890</li>
            <li>Email: <br /> little@lemon.com</li>
          </ul>
        </div>
        <div>
          <h3>Social Media</h3>
          <ul>
            <li><a href='/'>Facebook</a></li>
            <li><a href='/'>Instagram</a></li>
            <li><a href='/'>Twitter</a></li>
          </ul>
        </div>
      </section>
      <div className="copyright">
                <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
            </div>
    </footer>
  )
}

export default Footer;