import "../../Styles/Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-header">Chance 4 Pets</h1>
      <br />
      <section className="hero-text">
        <h2 className="header-text"> Mission: </h2>
        <i>
          <p className="hero-text-body">
            A bridge between animals in need, animal rescues and adoptors. Help
            pets in need to find their forever home, and humans to find their
            next furbaby.
          </p>
        </i>
      </section>
    </div>
  );
}
