import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div>
          <h4>COMPANY</h4>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and conditions</a>
            </li>
            <li>
              <a href="#">Imprint</a>
            </li>
            <li>
              <a href="#">Careers / Jobs</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>HELP CENTER</h4>
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Customer FAQs</a>
            </li>
            <li>
              <a href="#">Business FAQs</a>
            </li>
            <li>
              <a href="#">Supplier FAQs</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>OUR SERVICES</h4>
          <ul>
            <li>
              <a href="#">Airport Transfer</a>
            </li>
            <li>
              <a href="#">City Transfer</a>
            </li>
            <li>
              <a href="#">Hourly Transfer</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Supplier</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2020 rydeu.com All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
