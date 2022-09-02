import { Link, Routes, Route } from "react-router-dom";
import { Card } from "antd";
import React from "react";
import IndividualPet from "../pages/IndiviualPet";
import { getCatById } from "../operations/operations.js";
import { Button } from "antd";
import "../Styles/CatCard.css";
const { Meta } = Card;
export default function CatCard({ cat }) {
  return (
    <div>
      <Card className="antd-cat-card"
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="cat" src={cat.photoUrl} />}
      >
        <Meta title={cat.name} description={cat.description} />
        <Link to={`/cat/${cat._id}`}>
        <Button type="link" htmlType="button">
          Learn more
        </Button>
      </Link>
      <Routes>
        <Route path="/cat/_id" element={<IndividualPet />}></Route>
      </Routes>
      </Card>
    </div>
  );
}

// <img src={cat.photoUrl} alt="cat"></img>
//  <h2>{cat.name}</h2>
//  <h3>{cat.sex}</h3>
//  <h4>
//    Breed: {cat.breed}
//    <br />
//    Size: {cat.size}
//    <br />
//    Estimated date of birth:{cat.dateOfBirth}
//  </h4>

//  <h5>{cat.rescue}</h5>
//  <section>
//    E-mail address: {cat.eMail}
//    Location:<p>{cat.address}</p>
//  </section>
//  <br />
//  <p>{cat.description}</p>
//  );
//  }

//Attempt with function from other file
//   <Link to={`/cat/${cat._id}`}>
//     <Button type="link" htmlType="button">
//       Learn more
//     </Button>
//   </Link>
//    <Routes>
//     <Route
//       path={`/cat/${getCatById}`}
//       element={<IndividualPet />}
//     ></Route>
//   </Routes>
//  </div>

//     </>
//   );
// }
