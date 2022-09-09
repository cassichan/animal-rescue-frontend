import { useContext, useState } from "react";
import { PetContext } from "../../context/PetContext";
import "../../Styles/AddPet.css";

export default function AddPet() {
  const { setStrayCats, setStrayDogs } = useContext(PetContext);
  const [species, setSpecies] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [eMail, setEMail] = useState("");

  const [filebase64, setFileBase64] = useState("");
  const [image, setImage] = useState("");

  async function formSubmit(e) {
    e.preventDefault();
    const newPet = {
      species,
      address,
      description,
      phone,
      eMail,
      image,
    };
    try {
      const results = await fetch(
        `http://localhost:5001/cat-rescue-backend/us-central1/api/add-${species}`,
        // `https://cat-rescue-backend.web.app/add-${species}`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            // Authorization: token,
          },
          body: JSON.stringify(newPet),
        }
      );
      const data = await results.json();
      console.log(data);
      // window.location.reload(false);
      if (species === "cat") {
        setStrayCats(data);
      } else {
        setStrayDogs(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function convertFile(files) {
    if (files) {
      const fileRef = files[0] || "";
      const fileType = fileRef.type || "";
      console.log(`This is file upload of type:${fileType}`);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev) => {
        setImage(`data:${fileType};base64, ${btoa(ev.target.result)}`);
      };
    }
  }

  return (
    <>
      <section className="add-pet-page-container">
        <section className="add-pet-header">
          <h1 className="add-pet-form-text">Found an animal?</h1>
          <p>We can help. Please submit information about animal. Someone will reach out to you shortly. </p>
        </section>
        <section className="form-section">
          <form
            className="new-animal-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="form-label" htmlFor="species">
              Species:
              <select onChange={(e) => setSpecies(e.target.value)}>
                <option value="default">Select one</option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
              </select>
            </label>
            <br />
            <label className="form-label" htmlFor="description">
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
            <label className="form-label" htmlFor="address">
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
            <input
              className="form-input"
              type="file"
              onChange={(e) => convertFile(e.target.files)}
            />
            <hr />
            {/* {filebase64.indexOf("image/") > -1 && (
              <img src={image} width={300} />
            )} */}
            <label className="form-label" htmlFor="phone">
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
            <label className="form-label" htmlFor="email">
              E-mail:
              <input
                className="form-input-email"
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
        <img className="uploaded-animal-image" src={image}></img>
        <br />
      </section>
    </>
  );
}
