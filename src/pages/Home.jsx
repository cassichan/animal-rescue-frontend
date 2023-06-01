import CatList from "../components/HomeComponents/CatList";
import DogList from "../components/HomeComponents/DogList";

export default function Home({ isLoading, setIsLoading }) {
  return (
    <>
      <header className="user-homepage-header-container">
        <h1 className="user-homepage-header">
          Please consider adopting one of these furry friends in need.
        </h1>
      </header>
      <CatList isLoading={isLoading} setIsLoading={setIsLoading} />
      <DogList isLoading={isLoading} setIsLoading={setIsLoading} />
    </>
  );
}
