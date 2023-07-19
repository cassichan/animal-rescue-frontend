import { useEffect, useContext } from "react";
import { Spin } from "antd";
import { PetContext } from "../../context/PetContext";
import CatCard from "./CatCard";
import "../../App.css";

export default function CatList({ isLoading, setIsLoading }) {
  const { cats, setCats, token } = useContext(PetContext);
  const updateCatList = (cat) => {
    const updatedList = cats.map((c) => {
      return c._id === cat._id ? cat : c;
    });
    setCats(updatedList);
  };
  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API}/cats`)
      .then((res) => res.json())
      .then((data) => {
        setCats(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [setCats]);
  if (isLoading && !cats) {
    return <Spin/>;
  }
  return (
    <section className="card-section">
      <h3 className="header-text">Cats Available for Adoption</h3>
      <section className="pet-list">
        {cats &&
          cats.map((c) => (
            <CatCard token={token} key={c._id} cat={c} setCat={updateCatList} />
          ))}
      </section>
    </section>
  );
}
