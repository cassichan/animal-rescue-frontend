import { useState, useEffect } from "react";
import CatCard from "./CatCard";
import "../Styles/PetList.css"

export default function CatList() {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    // fetch("https://cat-rescue-backend.web.app/cats")
    fetch("http://localhost:5001/cat-rescue-backend/us-central1/api/cats")
      .then((res) => res.json())
      .then((data) => setCat(data));
  }, []);
  if (!cat) {
    return <h1> Loading...please wait</h1>;
  }
  return (
    <>
      <h3>Adopt a Cat Today!</h3>
      <section className="pet-list">
      {cat &&
        cat.map((cat) => <CatCard id={cat._id} cat={cat} setCat={setCat} />)}
      <button>Learn more</button>
      </section>
    </>
  );
}
