import { Link, Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import IndividualPet from "../pages/IndiviualPet";
import { PetContext } from "../context/PetContext";
import { Card } from "antd";
import { Button } from "antd";
import "../Styles/CatCard.css";
const { Meta } = Card;
export default function CatCard({cat}) {
  // const { cats, setCats } = useContext(PetContext);
  console.log(cat)
  return (
    <div>
      <Card
        className="antd-cat-card"
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="cat" src={cat.photoUrl} />}
        headStyle={{ textAlign: "center" }}
        bodyStyle={{ borderStyle: "dashed", borderColor: "turquoise" }}
      >
        <Meta
          title={cat.name}
          // breed={cats.breed} size={cats.size}
          description={cat.description}
        />
        <Link to={`/cats/${cat._id}`}>
          <Button type="link" htmlType="button">
            Learn more
          </Button>
        </Link>
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
