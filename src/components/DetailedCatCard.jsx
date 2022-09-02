export default function DetailedCatCard({cat}) {
  return (
    <div className="detailed-cat-card">
      <h1>Individual cat</h1>
      <img src={cat.photoUrl} alt="cat"></img>
      <h2>{cat.name}</h2>
      <h3>{cat.sex}</h3>
      <h4>
        Breed: {cat.breed}
        <br />
        Size: {cat.size}
        <br />
        Estimated date of birth:{cat.dateOfBirth}
      </h4>
      <h5>{cat.rescue}</h5>
      <section>
        E-mail address: {cat.eMail}
        Location:<p>{cat.address}</p>
      </section>
      <br />
      <p>{cat.description}</p>
    </div>
  );
}
