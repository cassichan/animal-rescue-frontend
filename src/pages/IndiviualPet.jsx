import { useParams, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import CatCard from "../components/CatCard";

export default function IndividualPet({cat,setCat, dog, setDog}) {
  // const [pet, setPet] = useState([{}]);
  const {_id} = useParams()
  useEffect(() => {
    // fetch(`https://cat-rescue-backend.web.app/cats/${_id}`)
    fetch(`http://localhost:5001/cat-rescue-backend/us-central1/api/cats/${_id}`)
      .then((res) => res.json())
      .then((data) => setCat(data));
  }, [setCat,_id]);
  console.log(cat)
  if (!cat || !dog) {
    return <h1> Loading...please wait</h1>;
  }
  // if(!_id) {
  //   return <CatCard/>
  // }
  return (
    <>
    <CatCard id={cat._id} cat={cat} setCat={setCat} />
    </>
  );
}
