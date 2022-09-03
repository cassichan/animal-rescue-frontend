import { useState, useEffect } from "react";
import CatCard from "./CatCard";
import ".././App.css"
// import "../Styles/PetList.css";

export default function CatList() {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    fetch("https://cat-rescue-backend.web.app/cats")
      // fetch("http://localhost:5001/cat-rescue-backend/us-central1/api/cats")
      .then((res) => res.json())
      .then((data) => setCat(data));
  }, []);
  if (!cat) {
    return <h1> Loading...please wait</h1>;
  }
  return (
    <section className="card-section">
      <h3>Cats Available for Adoption</h3>
      <section className="pet-list">
        {cat &&
          cat.map((cat) => (
            <CatCard key={cat._id} _id={cat._id} cat={cat} setCat={setCat} />
          ))}
      </section>
    </section>
  );
}
