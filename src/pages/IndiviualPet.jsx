import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import DetailedCatCard from "../components/IndividualPetComponents/DetailedCatCard"
import { PetContext } from "../context/PetContext";

export default function IndividualPet() {
  const { cats, setCats, dogs, setDogs } = useContext(PetContext);
  const { _id } = useParams();
  console.log({ _id });
  useEffect(() => {
    //   // fetch(`https://cat-rescue-backend.web.app/cats/${_id}`)
    fetch(
      `http://localhost:5001/cat-rescue-backend/us-central1/api/cats/${_id}`
    )
      .then((res) => res.json())
      .then((data) => setCats(data));
  }, [setCats, _id]);
  console.log(cats);
  if (!cats || !dogs) {
    return <h1> Loading...please wait</h1>;
  }
  console.log({ cats });
  return (
    <>
      <DetailedCatCard id={cats._id} cats={cats} setCats={setCats} />
    </>
  );
}
