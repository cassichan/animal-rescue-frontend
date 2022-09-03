import "../Styles/Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-header">Chance 4 Pets</h1>
      <br />
      <br />
      <section className="hero-text">
        <h2> Mission: </h2>
        <p>
           A bridge between animals in need, animal rescues and adoptors. Help pets in need to
          find their forever home, and humans to find their next furbaby.
        </p>
      </section>
      <div className="cat-container">
        <div class="cat">
          <div class="ear ear--left"></div>
          <div class="ear ear--right"></div>
          <div class="face">
            <div class="eye eye--left">
              <div class="eye-pupil"></div>
            </div>
            <div class="eye eye--right">
              <div class="eye-pupil"></div>
            </div>
            <div class="muzzle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
