export default function CatCard({ cat }) {
  return (
    <>
      <div className="cat-card" key={cat._id}>
        <img src={cat.photoUrl} alt="cat"></img>
        <h2>{cat.name}</h2>
        <h3>
          {cat.sex}, {cat.breed}
        </h3>
        <h3>
          {cat.size}, {cat.dateOfBirth}
        </h3>
        <h4>{cat.rescue}</h4>
        <p>
          Contact: {cat.eMail}, {cat.address}
        </p>
        <p>{cat.description}</p>
      </div>
    </>
  );
}
