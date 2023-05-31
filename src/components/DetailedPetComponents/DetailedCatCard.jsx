import React from "react";
import { useContext } from "react";
import { Card } from "antd";
import { PetContext } from "../../context/PetContext";
import "../../Styles/DetailedPetPage.css";
import "../../App.css";

export default function DetailedCatCard() {
  const { cat } = useContext(PetContext);

  if (cat.name !== "") {
    return (
      <>
        <section className="detailed-antd-animal-card">
          <img
            className="detailed-animal-image"
            src={cat?.photoUrl}
            alt="cat"
          ></img>
          <Card title={cat?.name}>
            <section>
              <p> {cat?.rescue}</p>
              <p> {cat?.eMail}</p>
              <p>{cat?.address}</p>
              <p>{cat?.phone}</p>
              <p>Size: {cat?.size}</p>
              <p>Sex: {cat?.sex}</p>
              <p>Breed: {cat?.breed}</p>
              <p>Estimated Date of Birth: {cat?.dateOfBirth}</p>
              <p>Description: {cat?.description}</p>
            </section>
          </Card>
        </section>
      </>
    );
  } else {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
}
