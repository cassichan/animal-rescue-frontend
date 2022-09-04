import { Link, Routes, Route } from "react-router-dom";
import { Card } from "antd";
import React, { useContext } from "react";
import IndividualPet from "../pages/IndiviualPet";
// import { getCatById } from "../operations/operations.js";
import { Button } from "antd";
import "../Styles/CatCard.css";
import { PetContext } from "../context/PetContext";
const { Meta } = Card;
export default function CatCard() {
  const {cats, setCats} = useContext(PetContext)
  console.log(cats)
  return (
    <div>
      <Card
        className="antd-cat-card"
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="cat" src={cats.photoUrl} />}
        headStyle={{textAlign: "center"}}
        bodyStyle={{ borderStyle: "dashed", borderColor: "turquoise" }}
      >
        <Meta title={cats.name} 
        // breed={cats.breed} size={cats.size} 
        description={cats.breed} />
        <Link to={`/cat/${cats._id}`}>
          <Button type="link" htmlType="button">
            Learn more
          </Button>
        </Link>
        <Routes>
          <Route path="/cat/_id" element={<IndividualPet cats={cats} setCats={setCats}/>}></Route>
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
