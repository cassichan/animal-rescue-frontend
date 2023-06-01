import { useEffect, useContext } from "react";
import { PetContext } from "../../context/PetContext";
import DogCard from "./DogCard";
import "../../App.css";

export default function DogList({ isLoading, setIsLoading }) {
  const { dogs, setDogs } = useContext(PetContext);

  const updateDogList = (dog) => {
    const updatedList = dogs.map((d) => {
      return d._id === dog._id ? dog : d;
    });
    setDogs(updatedList);
  };
  useEffect(() => {
    setIsLoading(true);
    setDogs(null);
    fetch(`${process.env.REACT_APP_API}/dogs`)
      .then((res) => res.json())
      .then((data) => {
        setDogs(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [setDogs]);
  if (isLoading) {
    return <h1> Loading...please wait</h1>;
  }
  return (
    <section className="card-section">
      <h3 className="header-text">Dogs Available for Adoption</h3>
      <section className="pet-list">
        {dogs &&
          dogs.map((d) => (
            <DogCard key={d._id} dog={d} setDog={updateDogList} />
          ))}
      </section>
    </section>
  );
}
