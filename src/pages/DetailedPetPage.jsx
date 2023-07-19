import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Spin } from "antd";
import { PetContext } from "../context/PetContext";
import DetailedCatCard from "../components/DetailedPetComponents/DetailedCatCard";
import DetailedDogCard from "../components/DetailedPetComponents/DetailedDogCard";
import "../Styles/DetailedPetPage.css";

export default function DetailedPet({ species, isLoading, setIsLoading }) {
  const { setCat, setDog } = useContext(PetContext);

  const { _id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API}/${species}/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (species === "cats") {
          setCat(data);
        } else if (species === "dogs") {
          setDog(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [setCat, setDog, _id]);

  if (isLoading) {
    return <Spin/>;
  }
  return (
    <>
      {species === "cats" ? (
        <DetailedCatCard />
      ) : species === "dogs" ? (
        <DetailedDogCard />
      ) : (
        <></>
      )}
    </>
  );
}
