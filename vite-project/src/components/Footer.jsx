import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link to={"https://www.digitalhouse.com/ar"}>
        <img className="logo" src="../src/assets/images/DH.png" alt="DH-logo" />
      </Link>
      <p>Alumno: Jimenez Esteban</p>
      <div className="redesSociales">
        <Link to={"https://www.instagram.com/_digitalhouse/?hl=es"}>
          {" "}
          <img
            className="ico"
            src="../src/assets/images/ico-instagram.png"
            alt="instagram-logo"
          />
        </Link>
        <Link to={"https://www.facebook.com/digitalhouseschool/?locale=es_LA"}>
          {" "}
          <img
            className="ico"
            src="../src/assets/images/ico-facebook.png"
            alt="facebook-logo"
          />
        </Link>
        <Link to={"https://wa.me/14634002262"}>
          {" "}
          <img
            className="ico"
            src="../src/assets/images/ico-whatsapp.png"
            alt="whatsapp-logo"
          />
        </Link>
        <Link to={"https://www.tiktok.com/@_digitalhouse"}>
          <img
            className="ico"
            src="../src/assets/images/ico-tiktok.png"
            alt="tiktok-logo"
          />
        </Link>
      </div>
    </footer>
  );
}
export default Footer;