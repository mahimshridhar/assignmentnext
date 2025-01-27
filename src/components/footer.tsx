import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/favourites"}>Favourites</Link>
            </li>
            <li>
              <Link href={"/cart"}>Cart</Link>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Your Fake Store. All rights reserved.</p>
      </div>
      <style jsx>{`
        footer {
          background-color: #333;
          color: white;
          padding: 40px 20px;
          text-align: center;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-section {
          flex: 1;
          min-width: 200px;
          margin-bottom: 20px;
        }

        .footer-section h3 {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section ul li {
          margin-bottom: 8px;
        }

        .footer-section ul li a {
          color: white;
          text-decoration: none;
        }

        .footer-section ul li a:hover {
          text-decoration: underline;
        }

        .social-links a:hover {
          opacity: 0.8;
        }

        .footer-bottom {
          margin-top: 20px;
          border-top: 1px solid #444;
          padding-top: 10px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
