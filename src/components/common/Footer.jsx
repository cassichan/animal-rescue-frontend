import "../../Styles/Footer.css";

export default function Footer() {
  return (
    <footer>
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
      <section className="footer-text"> © By Cassandra Curcio</section>
    </footer>
  );
}
