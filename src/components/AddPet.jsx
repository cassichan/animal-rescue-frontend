import { useState } from "react";

export default function AddPet({ cat, setCat, dog, setDog }) {
  const [species, setSpecies] = useState("cat");
  const [address, setAddress] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [eMail, setEMail] = useState("");

  async function formSubmit(e) {
    const newPet = {
      species: species,
      address: address,
      photoUrl: photoUrl,
      description: description,
      phone: phone,
      eMail: eMail,
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
      console.log(data);
      setCat(data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <p>Found an animal?</p>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* //Image uploader here */}

        <label htmlFor="species">
          Species:
          <select>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
            onChange={(e) => setSpecies(e.target.value)}
          </select>
        </label>
        <br />
        <label htmlFor="description">
          Description:
          <input
            type="text"
            value={description}
            name="description"
            placeholder="Size, color, unique traits"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="address">
          Location seen:
          <input
            type="text"
            value={address}
            name="address"
            placeholder="Specific please!"
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="phone">
          Phone number:
          <input
            type="text"
            value={phone}
            name="phone"
            placeholder="phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            value={eMail}
            placeholder="e-mail"
            onChange={(e) => setEMail(e.target.value)}
          />
        </label>
        <br />
        <button onClick={formSubmit} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
