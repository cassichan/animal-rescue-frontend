import Hero from "../components/HomeComponents/Hero";
import CatList from "../components/HomeComponents/CatList";
import DogList from "../components/HomeComponents/DogList";

export default function Landing() {
  return (
    <>
      <Hero />
      <CatList />
      <DogList />
    </>
  );
}