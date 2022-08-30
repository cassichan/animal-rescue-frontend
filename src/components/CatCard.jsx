import "../Styles/CatCard.css"

export default function CatCard({ cat }) {
  return (
    <>
      <div className="cat-card" key={cat._id}>
        <img src={cat.photoUrl} alt="cat"></img>
        <h4>{cat.name}</h4>
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
        <button className="about-pet-btn">Learn more</button>
      </div>
    </>
  );
}
