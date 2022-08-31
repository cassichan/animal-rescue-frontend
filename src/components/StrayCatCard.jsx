export default function StrayCatCard({cat}) {
    return (
        <>
        <div className="cat-card" key={cat._id}>
        {/* <img src={cat.photoUrl} alt="cat"></img> */}
        <h4>{cat.species}</h4>
        <h4> {cat.address}</h4>
        <p>{cat.description}</p>
        <p>
          Contact: {cat.eMail}, {cat.phone}
        </p><br/>
        <button className="about-pet-btn">Learn more</button>
      </div>
        </>
    )
}