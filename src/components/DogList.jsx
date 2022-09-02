import { useState, useEffect } from "react";
import DogCard from "./DogCard";
import "../Styles/PetList.css"

export default function DogList() {
  const [dog, setDog] = useState([]);
  useEffect(() => {
    fetch("https://cat-rescue-backend.web.app/dogs")
    // fetch("http://localhost:5001/cat-rescue-backend/us-central1/api/dogs")
      .then((res) => res.json())
      .then((data) => setDog(data))
      .catch(console.error);
  }, [setDog]);
  if (!dog) {
    return <h1> Loading...please wait</h1>;
  }
  return (
    <>
      <h3>Adopt a Dog Today!</h3>
      <section className="pet-list">
        {dog &&
          dog.map((dog) => <DogCard key={dog._id} _id={dog._id} dog={dog} setDog={setDog} />)}
      </section>
    </>
  );
}
