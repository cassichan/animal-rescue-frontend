import Hero from "../components/HomeComponents/Hero";
import CatList from "../components/HomeComponents/CatList";
import DogList from "../components/HomeComponents/DogList";

export default function Landing({ isLoading, setIsLoading}) {
  return (
    <>
      <Hero />
      <CatList isLoading={isLoading} setIsLoading={setIsLoading}/>
      <DogList isLoading={isLoading} setIsLoading={setIsLoading}/>
    </>
  );
}