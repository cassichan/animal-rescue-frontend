import { useContext, useEffect} from "react";
import { PetContext } from "../../context/PetContext";
import StrayCatCard from "../AddPetComponents/StrayCatCard.jsx";
import StrayDogCard from "../AddPetComponents/StrayDogCard.jsx";

export default function StrayPetList() {
  const { strayCats, setStrayCats, strayDogs, setStrayDogs, token } = useContext(PetContext);
  useEffect(() => {
    // fetch("https://cat-rescue-backend.web.app/get-stray-cats"
    // )
    fetch("http://localhost:5001/cat-rescue-backend/us-central1/api/get-stray-cats")
    // ,{headers: {
    //   "Authorization": token,
    // }
  // })
      .then((results) => results.json())
      .then((data) => {
        setStrayCats(data);
      })
      .catch(console.error);
    fetch(
      "http://localhost:5001/cat-rescue-backend/us-central1/api/get-stray-dogs"
      // "https://cat-rescue-backend.web.app/get-stray-dogs"
    )
      .then((results) => results.json())
      .then((data) => {
        setStrayDogs(data);
      })
      .catch(console.error);
  }, []);
  return (
    <>
      <p>List of stray cats</p>
      <section className="pet-list">
        {strayCats && strayCats.map((c) => <StrayCatCard key={c._id} cat={c} />)}
      </section>
      <p>List of stray dogs</p>
      <section className="pet-list">
        {strayDogs && strayDogs.map((d) => <StrayDogCard key={d._id} dog={d} />)}
      </section>
        {/* <img className="heart-image" src="https://cdn.pixabay.com/photo/2016/10/18/19/42/abstract-1751204_1280.png"></img> */}
    </>
  );
}
