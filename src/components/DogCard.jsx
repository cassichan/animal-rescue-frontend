import "../Styles/DogCard.css"

export default function DogCard({ dog }) {
    return (
      <>
        <div className="dog-card" key={dog._id}>
          <img src={dog.photoUrl} alt="dog"></img>
          <h4>{dog.name}</h4>
          <h5>
            {dog.sex}, {dog.breed}
          </h5>
          <h5>
            {dog.size}, {dog.dateOfBirth}
          </h5>
          <h5>{dog.rescue}</h5>
          <p>
            Contact: {dog.eMail}, {dog.address}
          </p>
          <p>{dog.description}</p>
        </div>
      </>
    );
  }
  