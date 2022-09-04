import { useState, useEffect, useContext } from "react";
import { Link, Route } from "react-router-dom";
import { Button } from "antd";
import { PetContext } from "../../context/PetContext";
import CatCard from "./CatCard";
import "../../App.css";

export default function CatList() {
  const [cats, setCats] = useState([]);
  // const { cats, setCats } = useContext(PetContext);
  useEffect(() => {
    // fetch("https://cat-rescue-backend.web.app/cats")
    fetch("http://localhost:5001/cat-rescue-backend/us-central1/api/cats")
      .then((res) => res.json())
      .then((data) => setCats(data))
      .catch((error) => console.log(error));
  }, [setCats]);
  console.log({ cats });
  if (!cats) {
    return <h1> Loading...please wait</h1>;
  }
  return (
    <section className="card-section">
      <h3>Cats Available for Adoption</h3>
      <section className="pet-list">
        {cats && cats.map((cat) => <CatCard key={cat._id} cat={cat} />)}
      </section>
    </section>
  );
}
