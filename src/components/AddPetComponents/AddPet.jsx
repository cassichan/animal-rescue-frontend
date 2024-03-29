import { useContext, useState } from "react";
import { PetContext } from "../../context/PetContext";
import "../../Styles/AddPet.css";

export default function AddPet() {
  const { setStrayCats, setStrayDogs } = useContext(PetContext);
  const [species, setSpecies] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [eMail, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [formIsSubmitting, setFormIsSubmitting] = useState(false);

  function formRefresh() {
    setSpecies("");
    setDescription("");
    setAddress("");
    setPhone("");
    setEmail("");
    setImage("");
    const imageInput = document.getElementById("image-upload");
    imageInput.value = null;
    const selectInput = document.getElementById("species-select");
    selectInput.value = "default";
  }

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
      setFormIsSubmitting(true);
      const results = await fetch(
        `${process.env.REACT_APP_API}/add-${species}`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPet),
        }
      );
      const data = await results.json();
      console.log(data);
      if (species === "cat") {
        setStrayCats(data);
      } else {
        setStrayDogs(data);
      }
      formRefresh();
      setFormIsSubmitting(false);
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
      <section className="add-pet-header-container">
        <h1 className="add-pet-title">
          <u>Report an animal in need</u>
        </h1>
      </section>
      <section className="add-pet-page-container">
        <section className="add-pet-header">
          <h1 className="add-pet-form-text">Found an animal?</h1>
          <p className="add-pet-form-text">
            We can help.
            <br /> Please submit information about animal. Someone will reach
            out to you shortly.{" "}
          </p>
        </section>
        <section className="form-section">
          <form
            className="new-animal-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="form-label" htmlFor="species">
              Species:
              <select
                id="species-select"
                onChange={(e) => setSpecies(e.target.value)}
              >
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
                required
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
                placeholder="Be specific please!"
                onChange={(e) => setAddress(e.target.value)}
                required
              ></input>
            </label>
            <br />
            <input
              id="image-upload"
              className="form-input image-upload-input"
              type="file"
              onChange={(e) => convertFile(e.target.files)}
            />
            <hr />
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
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <button className="submit-btn" type="submit" onClick={formSubmit}>
              Submit
            </button>
            {formIsSubmitting ? <p>Submitting, Please wait...</p> : ""}
          </form>
        </section>

        {image ? (
          <img className="uploaded-animal-image" src={image} alt="animal"></img>
        ) : (
          ""
        )}
        <br />
      </section>
    </>
  );
}
