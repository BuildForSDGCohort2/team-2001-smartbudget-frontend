import React from "react";
import style from "./index.module.scss";
import Call from "../../assets/icons/Vector.png";
import Locate from "../../assets/icons/Vector-1.png";
import Mail from "../../assets/icons/ios-mail 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <>
      <section className={style["footer__container"]}>
        <div>
          <header>
            <h4>Contact Us</h4>
          </header>
          <ul>
            <li>
              <img src={Call} alt="" /> +234 8101 074 755
            </li>
            <li>
              <img src={Locate} alt="" /> 23 Ogui Road, Enugu
            </li>
            <li>
              <img src={Mail} alt="" /> scottie@gmail.com
            </li>
          </ul>
        </div>
        <div>
          <header>
            <h4>Policies & Info</h4>
          </header>
          <ul>
            <li> Terms & Condition</li>
            <li>Policy for Companies</li>
            <li> Policy for Small scale</li>
          </ul>
        </div>
        <div>
          <header>
            <h4>Quick Links</h4>
          </header>
          <ul>
            <li> Loginn</li>
            <li>Sign Up</li>
            <li> FAQs</li>
          </ul>
        </div>
        <div>
          <header>
            <h4>My account</h4>
          </header>

          <ul>
            <li> Dashboard</li>
            <li>My Projects</li>
            <li>Security</li>
          </ul>
        </div>
        <div>
          <header>
            <h4>Subscribe</h4>
          </header>
          <p>Get mails about business progress and newsletter</p>
          <div>
            <input type="text" name="subscribe" placeholder="email" id="" />
            <FontAwesomeIcon icon={"paper-plane"} />
          </div>
          <div className={style["social__media"]}>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
      </section>
      <div className={style["copyright"]}>
        Beejay &nbsp; &copy; copyright {new Date().getFullYear()}
      </div>
    </>
  );
}
