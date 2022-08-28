export default function DogCard({ dog }) {
    return (
      <>
        <div className="dog-card" key={dog._id}>
          <img src={dog.photoUrl} alt="dog"></img>
          <h2>{dog.name}</h2>
          <h3>
            {dog.sex}, {dog.breed}
          </h3>
          <h3>
            {dog.size}, {dog.dateOfBirth}
          </h3>
          <h4>{dog.rescue}</h4>
          <p>
            Contact: {dog.eMail}, {dog.address}
          </p>
          <p>{dog.description}</p>
        </div>
      </>
    );
  }
  