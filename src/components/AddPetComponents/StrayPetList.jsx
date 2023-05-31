import { useContext, useEffect } from "react";
import { Divider } from "antd";
import { PetContext } from "../../context/PetContext";
import StrayCatCard from "../AddPetComponents/StrayCatCard.jsx";
import StrayDogCard from "../AddPetComponents/StrayDogCard.jsx";
import "../../App.css";

export default function StrayPetList() {
  const { strayCats, setStrayCats, strayDogs, setStrayDogs } =
    useContext(PetContext);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/get-stray-cats`)
      .then((results) => results.json())
      .then((data) => {
        setStrayCats(data);
      })
      .catch(console.error);
    fetch(`${process.env.REACT_APP_API}/get-stray-dogs`)
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
