// import { useState } from "react";
import AddPet from "../components/AddPet";
import StrayPetList from "../components/StrayPetList";
import { Footer } from "antd/lib/layout/layout";

export default function NewPetPage({species}) {
    return (
        <>
        <AddPet/>
        <StrayPetList species={species}/>
        <Footer/>
        </>

    )
}