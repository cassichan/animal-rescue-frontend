// import { useState } from "react";
import AddPet from "../components/AddPet";
import StrayPetList from "../components/StrayPetList";

export default function NewPetPage({species}) {
    // const [species, setSpecies] = useState("");
    return (
        <>
        <AddPet/>
        <StrayPetList species={species}/>
        </>

    )
}