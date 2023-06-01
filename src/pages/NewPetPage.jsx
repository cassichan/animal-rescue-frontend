import { Divider } from "antd";
import AddPet from "../components/AddPetComponents/AddPet";
import StrayPetList from "../components/AddPetComponents/StrayPetList";

export default function NewPetPage({ species, isLoading, setIsLoading }) {
  return (
    <>
      <AddPet />
      <Divider />
      <StrayPetList
        species={species}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </>
  );
}
