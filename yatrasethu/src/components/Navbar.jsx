import { Link, NavLink } from "react-router-dom";
import { Compass } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span className="logo-mark"><Compass size={22} /></span>
        <span>Yatra<span>Sethu</span></span>
      </Link>

      <div className="nav-links">
        <NavLink to="/" end>Discover</NavLink>
        <NavLink to="/districts">Districts</NavLink>
        <NavLink to="/how-it-works">How it works</NavLink>
      </div>

      <Link to="/" className="nav-button">Start Exploring</Link>
    </nav>
  );
}