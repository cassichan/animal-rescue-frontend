import { Link } from "react-router-dom";
import "../../Styles/Navbar.css"

export default function Navbar() {
  return (
    <>
      <nav className="header">
        <section className="header-logo-container">
          <img
            className="brand-logo-image"
            src="chance4petslogo.png"
            alt="Logo of black cat and black dog animation on top of a cupped hand"
          ></img>
        </section>

        <section className="link-container">
          <Link className="route-links" to="/">
            Home
          </Link>
          <Link className="route-links" to="/found-a-pet">
            Share found animal
          </Link>
        </section>
        <section className="main-social-container">
          <div className="social-container">
            <a
              href="https://github.com/cassichan"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="logo-img"
                src="GitHub-Mark-32px.png"
                alt="Github logo: the silhouette of a white cat outline with a tentactle-shaped tail inside of a black circle."
              ></img>
            </a>
            <a
              href="https://www.linkedin.com/in/cassandra-l-curcio/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="logo-img"
                src="LI-In-Bug.png"
                alt="Linkedin logo: 'in' in white text inside of a rounded light-royal-blue square."
              ></img>
            </a>
          </div>
        </section>
      </nav>
    </>
  );
}
