import Hero from "../components/Hero";
import CatList from "../components/CatList";
import DogList from "../components/DogList";
import { Footer } from "antd/lib/layout/layout";

export default function Home() {
  return (
    <>
      <Hero />
      <CatList />
      <DogList />
      <Footer>
        <section> © By Cassandra Curcio</section>
      </Footer>
    </>
  );
}
