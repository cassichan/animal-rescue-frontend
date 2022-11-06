import { useContext } from "react";
// import Hero from "../components/HomeComponents/Hero";
import CatList from "../components/HomeComponents/CatList";
import DogList from "../components/HomeComponents/DogList";
import { PetContext } from "../context/PetContext";

export default function Home() {
  const { token, email } = useContext(PetContext);
  return (
    <>
      <h1>User's pet list</h1>
      {/* <Hero /> */}
      <CatList />
      <DogList />
    </>
  );
}
