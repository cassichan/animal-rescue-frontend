import Socials from "../common/Socials"
import "../../Styles/Footer.css"

export default function Footer() {
  return (
    <footer>
      {/* <Socials/> */}
      <div className="cat-container">
        <div className="cat">
          <div className="ear ear--left"></div>
          <div className="ear ear--right"></div>
          <div className="face">
            <div className="eye eye--left">
              <div className="eye-pupil"></div>
            </div>
            <div className="eye eye--right">
              <div className="eye-pupil"></div>
            </div>
            <div className="muzzle"></div>
          </div>
        </div>
      </div>
      {/* <a href="https://github.com/cassichan" target="_blank" rel="noreferrer">
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
      </a> */}
      <section className="footer-text"> © By Cassandra Curcio</section>
    </footer>
  );
}
