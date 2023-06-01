import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { PetContext } from "../context/PetContext";
import DetailedCatCard from "../components/DetailedPetComponents/DetailedCatCard";
import DetailedDogCard from "../components/DetailedPetComponents/DetailedDogCard";
import "../Styles/DetailedPetPage.css";

export default function DetailedPet({ species, isLoading, setIsLoading }) {
  const { setCat, setDog } = useContext(PetContext);

  const { _id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setCat(null);
    setDog(null);
    fetch(`https://cat-rescue-backend.web.app/${species}/${_id}`)
      // fetch(
      //   `http://localhost:5001/cat-rescue-backend/us-central1/api/${species}/${_id}`
      // )
      .then((res) => res.json())
      .then((data) => {
        if (species === "cats") {
          setCat(data);
        } else if (species === "dogs") {
          setDog(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [setCat, setDog, _id]);

  if (isLoading) {
    return <h1>Loading... please wait</h1>;
  }
  return (
    <>
      {species === "cats" ? (
        <DetailedCatCard />
      ) : species === "dogs" ? (
        <DetailedDogCard />
      ) : (
        <></>
      )}
    </>
  );
}
