import CatList from "../components/HomeComponents/CatList";
import DogList from "../components/HomeComponents/DogList";

export default function Home() {
  return (
    <>
      <header className="user-homepage-header-container">
        <h1 className="user-homepage-header">
          Please consider adopting one of these furry friends in need.
        </h1>
      </header>
      <CatList />
      <DogList />
    </>
  );
}
