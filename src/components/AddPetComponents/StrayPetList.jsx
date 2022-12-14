import { useContext, useEffect } from "react";
import { PetContext } from "../../context/PetContext";
import { Divider } from "antd";
import StrayCatCard from "../AddPetComponents/StrayCatCard.jsx";
import StrayDogCard from "../AddPetComponents/StrayDogCard.jsx";
import "../../App.css";

export default function StrayPetList() {
  const { strayCats, setStrayCats, strayDogs, setStrayDogs } =
    useContext(PetContext);
  useEffect(() => {
    fetch("https://cat-rescue-backend.web.app/get-stray-cats")
      // fetch("http://localhost:5001/cat-rescue-backend/us-central1/api/get-stray-cats")
      .then((results) => results.json())
      .then((data) => {
        setStrayCats(data);
      })
      .catch(console.error);
    fetch(
      // "http://localhost:5001/cat-rescue-backend/us-central1/api/get-stray-dogs"
      "https://cat-rescue-backend.web.app/get-stray-dogs"
    )
      .then((results) => results.json())
      .then((data) => {
        setStrayDogs(data);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="stray-animal-container">
      <section className="stray-animal-text-container">
        <h1 className="header-text">Stray cats</h1>
        <section className="pet-list">
          {strayCats &&
            strayCats.map((c) => <StrayCatCard key={c._id} cat={c} />)}
        </section>
        <Divider />
        <h1 className="header-text">Stray dogs</h1>
        <section className="pet-list">
          {strayDogs &&
            strayDogs.map((d) => <StrayDogCard key={d._id} dog={d} />)}
        </section>
      </section>
    </div>
  );
}
