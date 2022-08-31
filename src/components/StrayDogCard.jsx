export default function StrayDogCard({dog}) {
    return (
        <>
        <div className="dog-card" key={dog._id}>
        {/* <img src={dog.photoUrl} alt="dog"></img> */}
        <h4>{dog.species}</h4>
        <h4> {dog.address}</h4>
        <p>{dog.description}</p>
        <p>
          Contact: {dog.eMail}, {dog.phone}
        </p><br/>
        <button className="about-pet-btn">Learn more</button>
      </div>
        </>
    )
}