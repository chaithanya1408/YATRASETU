import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <div className="footer-logo"><Compass size={22} /> YatraSethu</div>
          <p>Discover beyond the tourist map.</p>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/">Discover</Link>
          <Link to="/districts">Districts</Link>
          <Link to="/how-it-works">How it works</Link>
        </div>

        <div>
          <h4>About</h4>
          <p>Smart travel discovery built to help travellers find meaningful local experiences.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 YatraSethu</span>
        <span>Always verify local timings, prices and accessibility before travel.</span>
      </div>
    </footer>
  );
}