export default function IndividualPet() {
  const [pet, setPet] = useState([{}]);
  useEffect(() => {
    // fetch("https://cat-rescue-backend.web.app/cats")
    fetch("http://localhost:5001/cat-rescue-backend/us-central1/api/cats/_id")
      .then((res) => res.json())
      .then((data) => setPet(data));
  }, []);
  if (!cat || !dog) {
    return <h1> Loading...please wait</h1>;
  }
  return (
    <>
     
    </>
  );
}
