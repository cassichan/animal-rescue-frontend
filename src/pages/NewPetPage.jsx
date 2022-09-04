import AddPet from "../components/AddPet";
import StrayPetList from "../components/StrayPetList";

export default function NewPetPage({ species }) {
  return (
    <>
      <AddPet />
      <StrayPetList species={species} />
    </>
  );
}
