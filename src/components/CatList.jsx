import { useState, useEffect } from "react";
import CatCard from "./CatCard";

export default function CatList() {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    fetch("https://cat-rescue-backend.web.app/cats")
      .then((res) => res.json())
      .then((data) => setCat(data));
  }, []);
  if (!cat) {
    return <h1> Loading...please wait</h1>;
  }
  return (
    <>
      <h1>Adopt a Cat Today!</h1>
      {cat &&
        cat.map((cat) => <CatCard id={cat._id} cat={cat} setCat={setCat} />)}
      <button>Learn more</button>
    </>
  );
}
