import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar" style={{ justifyContent: "left" }}>
        <img
          className="logo"
          src="https://lirp.cdn-website.com/1a29d4ed/dms3rep/multi/opt/logo_redondo-1920w.png"
          alt="First slide"
        />
        <div className="header">
          <p className="title">ARQUITETURA / CONSULTORIA / DESIGN</p>

          <p className="description1">
            local de terra batida, cimentado ou lajeado, próprio para
          </p>
          <p className="description2">
            debulhar, trilhar, secar e limpar <u>ideias</u>
          </p>
        </div>
        <ul className="navlinks">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">
            &#9776;
          </label>
          <div className="menu">
            <li
              onClick={() => {
                document.getElementById("checkbox_toggle").checked = false;
              }}
            >
              <Link
                to="/"
                style={{ textDecoration: "none", color: "rgb(116, 76, 36)" }}
              >
                Home
              </Link>
            </li>
            -
            <li
              onClick={() => {
                document.getElementById("checkbox_toggle").checked = false;
              }}
            >
              <Link
                to="/projects"
                style={{ textDecoration: "none", color: "rgb(116, 76, 36)" }}
              >
                projectos / works
              </Link>
            </li>
            -
            <li
              onClick={() => {
                document.getElementById("checkbox_toggle").checked = false;
              }}
            >
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "rgb(116, 76, 36)" }}
              >
                sobre / about
              </Link>
            </li>
            -
            <li
              onClick={() => {
                document.getElementById("checkbox_toggle").checked = false;
              }}
            >
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "rgb(116, 76, 36)" }}
              >
                contacto / contact
              </Link>
            </li>
          </div>
          <a href="mailto:franciskopereira@hotmail.com?subject=SendMail&body=Description">
            <img
              className="social1"
              src="https://w7.pngwing.com/pngs/378/900/png-transparent-email-computer-icons-email.png"
              alt="First slide"
            />
          </a>
          <a href="http://instagram.com/atelier.eira">
            <img
              className="social2"
              src="https://png.pngitem.com/pimgs/s/512-5123528_logo-instagram-marrom-png-transparent-png.png"
              alt="First slide"
            />
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
