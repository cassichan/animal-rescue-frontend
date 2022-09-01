import { useParams, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

export default function IndividualPet({cat,setCat, dog, setDog}) {
  // const [pet, setPet] = useState([{}]);
  const {_id} = useParams()
  useEffect(() => {
    fetch(`https://cat-rescue-backend.web.app/cat/${_id}`)
    // fetch(`http://localhost:5001/cat-rescue-backend/us-central1/api/cat/${_id}`)
      .then((res) => res.json())
      .then((data) => setCat(data));
  }, [setCat, _id]);
  if (!cat || !dog) {
    return <h1> Loading...please wait</h1>;
  }
  return (
    <>
    {/* <Routes>
      <Route path="/cat/_id" element={<IndividualPet/>}></Route>
      </Routes> */}
     <h1>{cat.name}</h1>
     <img src={cat.photoUrl} alt="cat"></img>
     <h5>
          {cat.sex}, {cat.breed}
        </h5>
        <h5>
          {cat.size}, {cat.dateOfBirth}
        </h5>
        <h5>{cat.rescue}</h5>
        <p>
          Contact: {cat.eMail}, {cat.address}
        </p><br/>
        <p>{cat.description}</p>
    </>
  );
}
