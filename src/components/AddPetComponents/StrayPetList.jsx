import { useContext, useEffect } from "react";
import { Divider, Spin } from "antd";
import { PetContext } from "../../context/PetContext";
import StrayCatCard from "../AddPetComponents/StrayCatCard.jsx";
import StrayDogCard from "../AddPetComponents/StrayDogCard.jsx";
import "../../App.css";

export default function StrayPetList({ isLoading, setIsLoading }) {
  const { strayCats, setStrayCats, strayDogs, setStrayDogs } =
    useContext(PetContext);
  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API}/get-stray-cats`)
      .then((results) => results.json())
      .then((data) => {
        setStrayCats(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
    fetch(`${process.env.REACT_APP_API}/get-stray-dogs`)
      .then((results) => results.json())
      .then((data) => {
        setStrayDogs(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Spin/>;
  }
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
