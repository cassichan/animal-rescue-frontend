import { useContext } from "react";
import AddPet from "../components/AddPetComponents/AddPet";
import StrayPetList from "../components/AddPetComponents/StrayPetList";
import { PetContext } from "../context/PetContext";

export default function NewPetPage({ species }) {

  const {token} = useContext(PetContext)

  return (
    <>
      <AddPet token={token}/>
      <StrayPetList
      //  token={token} 
      species={species} />
    </>
  );
}
