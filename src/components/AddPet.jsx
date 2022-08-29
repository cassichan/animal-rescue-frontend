import { useState, useEffect } from "react";

export default function AddPet() {
  const [species, setSpecies] = useState("");
  const [location, setLocation] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");

  //Make a select input to choose cat or dog
  async function handleSubmit(e) {
    const newPet = {
      species: species,
      location: location,
      photoUrl: photoUrl,
      size: size,
      description: description,
    };
    try {
      const results = await fetch(
        `https://cat-rescue-backend.web.app/add-${species}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPet),
        }
      );
      const data = await results.json();
      //  window.location.reload(false)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="species">
          <input
            type="select"
            value={species}
            name="species"
            placeholder="species"
            onChange={(e) => setSpecies(e.target.value)}
          />
        </label>
      </form>
    </>
  );
}
