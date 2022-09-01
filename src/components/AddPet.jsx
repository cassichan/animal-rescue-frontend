import { useState } from "react";
import { Form, Button, Input, Select } from "antd";
// import {ref, uploadBytes, getDownloadURL, listAll} from "firebase/storage"
// import {storage} from "../firebase"
// import {v4} from "uuid"

export default function AddPet({ cat, setCat, dog, setDog }) {
  const [species, setSpecies] = useState("");
  const [address, setAddress] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [eMail, setEMail] = useState("");

  const { Option } = Select;

  const onChange = (value) => {
    setSpecies(value)
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

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
      if (species === "cat") {
        setCat(data);
      } else {
        setDog(data);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <section>
      <p className="add-pet-form-header">Found an animal?</p>
      <Form onFinish={formSubmit}>
        <Select
          showSearch
          placeholder="Select one"
          optionFilterProp="children"
          // onChange={onChange}
          // onSearch={onSearch}
          onChange={(e) => setSpecies(e.target.value)}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          <Option value="Cat">Cat</Option>
          <Option value="Dog">Dog</Option>
        </Select>
        <Form.Item label="Description" name="description">
          <Input onChange={(e) => setDescription(e.target.value)} />
        </Form.Item>
        <Form.Item label="Location" name="location">
        <Input onChange={(e) => setAddress(e.target.value)} />
        </Form.Item>
        <Form.Item label="Phone number" name="phone">
        <Input onChange={(e) => setPhone(e.target.value)} />
        </Form.Item>
        <Form.Item label="Email" name="email">
        <Input onChange={(e) => setEMail(e.target.value)} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
      {/* <form onSubmit={(e) => e.preventDefault()}>
          {/* //Image uploader here */}

      {/* <label htmlFor="species">
            Species:
            <select onChange={(e) => setSpecies(e.target.value)}>
              <option value="default">Select one</option>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
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
        </form> */}
    </section>
  );
}
