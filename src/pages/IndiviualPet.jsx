import { useParams} from "react-router-dom";
import { useEffect } from "react";
import DetailedCatCard from "../components/CatCard";

export default function IndividualPet({ cats, setCats, dog, setDog }) {
  const { _id } = useParams();
  console.log({_id})
  useEffect(() => {
  //   // fetch(`https://cat-rescue-backend.web.app/cats/${_id}`)
    fetch(`http://localhost:5001/cat-rescue-backend/us-central1/api/cats/${_id}`)
      .then((res) => res.json())
      .then((data) => setCats(data));
  }, [setCats,_id]);
  console.log(cats)
  if (!cats || !dog) {
    return <h1> Loading...please wait</h1>;
  }
  console.log({cats})
  return (
    <>
    <h1>lahdshf</h1>
      <DetailedCatCard id={cats._id} cats={cats} setCats={setCats} />
    </>
  );
}
