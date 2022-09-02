import { useParams, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import DetailedCatCard from "../components/CatCard";

export default function IndividualPet({ cat, setCat, dog, setDog }) {
  const { _id } = useParams();
  // useEffect(() => {
  //   // fetch(`https://cat-rescue-backend.web.app/cats/${_id}`)
  //   fetch(`http://localhost:5001/cat-rescue-backend/us-central1/api/cats/${_id}`)
  //     .then((res) => res.json())
  //     .then((data) => setCat(data));
  // }, [setCat,_id]);
  // console.log(cat)
  // if (!cat || !dog) {
  //   return <h1> Loading...please wait</h1>;
  // }
  return (
    <>
      <DetailedCatCard id={cat._id} cat={cat} setCat={setCat} />
    </>
  );
}
