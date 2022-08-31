export default function IndividualPet({cat,setCat, dog, setDog}) {
  // const [pet, setPet] = useState([{}]);
  useEffect(() => {
    fetch("https://cat-rescue-backend.web.app/cats/_id")
    // fetch("http://localhost:5001/cat-rescue-backend/us-central1/api/cats/_id")
      .then((res) => res.json())
      .then((data) => setCat(data));
  }, []);
  if (!cat || !dog) {
    return <h1> Loading...please wait</h1>;
  }
  return (
    <>
     
    </>
  );
}
