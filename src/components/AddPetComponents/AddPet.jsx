import { useContext, useState } from "react";
import { Form, Button, Input, Select } from "antd";
// import {ref, uploadBytes, getDownloadURL, listAll} from "firebase/storage"
// import {storage} from "../firebase"
// import {v4} from "uuid"
import { PetContext } from "../../context/PetContext";
import "../../Styles/AddPet.css";

export default function AddPet() {
  const { cats, setCats, dogs, setDogs } = useContext(PetContext);
  const [species, setSpecies] = useState("");
  const [address, setAddress] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [eMail, setEMail] = useState("");
  const [filebase64, setFileBase64] = useState("");

  // const [value, setValue] = useState("");

  // const [form, setForm] = useState({});
  // const [formSubmitted, setFormSubmitted] = useState(false);

  // const { Option } = Select;

  // const onChange = (value) => {
  //   setValue(value);
  //   console.log(`selected ${value}`);
  // };

  // const onSearch = (value) => {
  //   setValue(value);
  //   console.log("search:", value);
  // };

  async function formSubmit(e) {
    e.preventDefault();
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
        `http://localhost:5001/cat-rescue-backend/us-central1/api/add-${species}`,
        // `https://cat-rescue-backend.web.app/add-${species}`,
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
      window.location.reload(false);
      if (species === "cat") {
        setCats(data);
      } else {
        setDogs(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // function convertFile (files) {
  //   if (files) {
  //     const fileRef = files[0] || ""
  //     const reader = new FileReader()
  //     reader.readAsBinaryString(fileRef)
  //     reader.onload=(ev) => {
  //       setFileBase64(`data:${}`)
  //     }
  //   }
  // }

  return (
    <section className="form-section">
      <h1 className="add-pet-form-header">Found an animal?</h1>

      <form className="new-animal-form" onSubmit={(e) => e.preventDefault()}>
        {/* //Image uploader here */}

        <label className="form-input" htmlFor="species">
          Species:
          <select onChange={(e) => setSpecies(e.target.value)}>
            <option value="default">Select one</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </select>
        </label>
        <br />
        <label className="form-input" htmlFor="description">
          Description:
          <input
            className="form-input"
            type="text"
            value={description}
            name="description"
            placeholder="Size, color, unique traits"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label className="form-input" htmlFor="address">
          Location seen:
          <input
            className="form-input"
            type="text"
            value={address}
            name="address"
            placeholder="Specific please!"
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <label className="form-input" htmlFor="phone">
          Phone number:
          <input
            className="form-input"
            type="text"
            value={phone}
            name="phone"
            placeholder="Phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <label className="form-input" htmlFor="email">
          E-mail:
          <input
            className="form-input"
            type="email"
            value={eMail}
            placeholder="E-mail"
            onChange={(e) => setEMail(e.target.value)}
          />
        </label>
        <br />
        <button className="submit-btn" onClick={formSubmit} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
