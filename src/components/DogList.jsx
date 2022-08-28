import { useState, useEffect } from "react";
import DogCard from "./DogCard"

export default function DogList() {
  const [dog, setDog] = useState([]);
  useEffect(() => {
    fetch("https://cat-rescue-backend.web.app/dogs")
      .then((res) => res.json())
      .then((data) => setDog(data));
  }, []);
  if (!dog) {
    return <h1> Loading...please wait</h1>;
  }
  return (
    <>
      <h1>Adopt a Dog Today!</h1>
      {dog && dog.map((dog) => <DogCard id={dog._id} dog={dog} setDog={setDog} />)}
      <button>Learn more</button>
    </>
  );
}
