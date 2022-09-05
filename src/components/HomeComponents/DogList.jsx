import { useState, useEffect, useContext } from "react";
// import { PetContext } from "../../context/PetContext";
import DogCard from "./DogCard";
import "../../App.css";

export default function DogList() {
  const [dogs, setDogs] = useState([]);
  // const { dogs, setDogs } = useContext(PetContext);
  useEffect(() => {
    fetch("https://cat-rescue-backend.web.app/dogs")
      // fetch("http://localhost:5001/cat-rescue-backend/us-central1/api/dogs")
      .then((res) => res.json())
      .then((data) => setDogs(data))
      .catch((error) => console.log(error));
  }, [setDogs]);
  console.log({ dogs });
  if (!dogs) {
    return <h1> Loading...please wait</h1>;
  }
  return (
    <section className="card-section">
      <h3>Dogs Available for Adoption</h3>
      <section className="pet-list">
        {dogs.length && dogs.map((dog) => <DogCard key={dog._id} dog={dog} />)}
      </section>
    </section>
  );
}
