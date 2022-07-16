import "./styles/Header.css";

function Header() {
  return (
    <header className="header-page1">
      <nav className="nav-page1">
        <ul className="nav-page1-list">
          <div className="left-content">
            <li className="nav-about">About Us</li>
            <li className="nav-about">Products</li>
            <li className="nav-about">Prices</li>
          </div>
          <li className="nav-free-trial">Free trial</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
