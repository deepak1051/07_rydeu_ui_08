import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Transfers</a>
          </li>
          <li>
            <a href="#">Bus Hire</a>
          </li>
        </ul>
      </nav>
      <div className="language-selector">
        <Link to="/help">Help</Link>
        <a href="#">Deutsch</a>
        <a href="#">EUR</a>
      </div>
    </header>
  );
}

export default Header;
