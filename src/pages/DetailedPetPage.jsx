import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import DetailedCatCard from "../components/DetailedPetComponents/DetailedCatCard";
import DetailedDogCard from "../components/DetailedPetComponents/DetailedDogCard";
import "../Styles/DetailedPetPage.css";
import { PetContext } from "../context/PetContext";

export default function DetailedPet({ species }) {
  const { cat, setCat, dog, setDog } = useContext(PetContext);

  //useParams hook to get _id from the route (app.js)
  const { _id } = useParams();

  useEffect(() => {
    setCat({});
    setDog({});
    fetch(`https://cat-rescue-backend.web.app/${species}/${_id}`)
      // fetch(
      //   `http://localhost:5001/cat-rescue-backend/us-central1/api/${species}/${_id}`
      // )
      .then((res) => res.json())
      .then((data) => {
        if (species === "cats") setCat(data);
        else if (species === "dogs") setDog(data);
      })
      .catch((error) => console.error(error));
  }, [species, _id]);

  return (
    <>
      {(!cat&&!dog)?  <h1> Loading...please wait</h1>:<></>}
      {(cat) || (dog) ? (
        species === "cats" ? (
          <DetailedCatCard />
        ) : species === "dogs" ? (
          <DetailedDogCard />
        ) : (
          <p>This pet is not available.</p>
        )
      ) : (
      <></>
      )}
    </>
  );
}
