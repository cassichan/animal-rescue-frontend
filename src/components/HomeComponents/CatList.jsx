import { useEffect, useContext } from "react";
import { PetContext } from "../../context/PetContext";
import CatCard from "./CatCard";
import "../../App.css";

export default function CatList() {
  const { cats, setCats } = useContext(PetContext);
  const updateCatList = (cat) => {
    const updatedList = cats.map((c) => {
      return c._id === cat._id ? cat : c;
    });
    setCats(updatedList);
  };
  useEffect(() => {
    fetch("https://cat-rescue-backend.web.app/cats")
    // fetch("http://localhost:5001/cat-rescue-backend/us-central1/api/cats")
      .then((res) => res.json())
      .then((data) => setCats(data))
      .catch((error) => console.log(error));
  }, [setCats]);
  if (!cats) {
    return <h1> Loading...please wait</h1>;
  }
  return (
    <section className="card-section">
      <h3 className="header-text">Cats Available for Adoption</h3>
      <section className="pet-list">
        {cats &&
          cats.map((c) => (
            <CatCard key={c._id} cat={c} setCat={updateCatList} />
          ))}
      </section>
    </section>
  );
}
