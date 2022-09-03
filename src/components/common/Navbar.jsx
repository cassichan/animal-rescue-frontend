import { Link } from "react-router-dom";
import Socials from '../Socials.jsx'

export default function Navbar() {
  return (
    <>
      <nav className="header">
        <Socials />
        <div className="link-container">
          <Link className="route-links" to="/">
            Home
          </Link>
          <Link className="route-links" to="/found-a-pet">
            Share found animal
          </Link>
        </div>
      </nav>
    </>
  );
}
