import { Divider } from "antd";
import "../../Styles/Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <h1 className="hero-header">Chance 4 Pets</h1>
        <Divider />
        <section className="hero-text">
          <h2 className="header-text"> Mission: </h2>
          <i>
            <p className="hero-text-body">
              A bridge between animals in need, animal rescues and adoptors.
              Help pets in need to find their forever home, and humans to find
              their next pet.<br/><br/>
              <b>Please create an account to favorite a pet.</b>
            </p>
          </i>
          <section className="img-container">
            <img
              className="hero-image"
              src="https://cdn.pixabay.com/photo/2016/07/14/16/39/dog-1517090_1280.png"
              alt="Black drawing of a cat and dog cuddling"
            ></img>
          </section>
        </section>
        <Divider />
      </div>
    </div>
  );
}
