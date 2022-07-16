import { Icon } from "@iconify/react";
import "./styles/Footer.css";

function Footer() {
  return (
    <footer className="footer-page1">
      <ul className="footer-page1-list">
        <li className="nav-about">
          <Icon icon="gg:bolt" />
          Performance
        </li>
        <li className="nav-about">
          <Icon icon="healthicons:coins-outline" />
          Better cost
        </li>
        <li className="nav-about">
          <Icon icon="fa6-solid:people-group" />
          More used
        </li>
        <li className="nav-free-trial">
          <Icon icon="file-icons:easybuild" />
          Easy to use
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
