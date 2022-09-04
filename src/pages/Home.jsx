import Hero from "../components/Hero";
import CatList from "../components/HomeComponents/CatList";
import DogList from "../components/DogList";

export default function Home() {
  return (
    <>
      <Hero />
      <CatList />
      <DogList />
    </>
  );
}
