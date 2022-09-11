import { useContext } from "react";
import { PetContext } from "../../context/PetContext";
import "../../App.css";
import "../../Styles/DetailedPetPage.css";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card, Switch } from "antd";
import React, { useState } from "react";

const { Meta } = Card;

export default function DetailedCatCard() {
  const { cat } = useContext(PetContext);
  const [loading, setLoading] = useState(true);

  const onChange = (checked) => {
    // if (cat ==! {})
    setLoading(!checked);
  };

  // if (cat ==! {}) {
  //   onChange();
  // }
  return (
    <>
      <Switch checked={!loading} onChange={onChange} />
      <section className="detailed-antd-animal-card">
        <img
          className="detailed-animal-image"
          src={cat.photoUrl}
          alt="cat"
        ></img>
        <Card
          loading={loading}
          onChange={onChange}
          title={cat.name}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          {/* <Meta description={[cat.rescue, cat.eMail, cat.address, cat.phone, cat.size, cat.sex, cat.breed, cat.dateOfBirth, cat.description]} /> */}
          <Card />
          <section>
            <p> {cat.rescue}</p>
            <p> {cat.eMail}</p>
            <p>{cat.address}</p>
            <p>{cat.phone}</p>
            <br />
            <p>Size: {cat.size}</p>
            <p>Sex: {cat.sex}</p>
            <p>Breed: {cat.breed}</p>
            <p>Estimated Date of Birth: {cat.dateOfBirth}</p>
            <p>Description: {cat.description}</p>
          </section>
        </Card>
      </section>
    </>
  );
}
