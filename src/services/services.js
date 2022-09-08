export async function updateCatFavorite(catId, favorite) {
  const fetchPets = await fetch(
    // `http://localhost:5001/cat-rescue-backend/us-central1/api/update-cat`,
    `https://cat-rescue-backend.web.app/update-cat?_id=${catId}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ favorite: !favorite }),
    }
  );
  const cat = await fetchPets.json();
  // console.log(cat);
  return !favorite;
}


export async function updateDogFavorite(dogId, favorite) {
  const fetchPets = await fetch(
    // `http://localhost:5001/cat-rescue-backend/us-central1/api/update-dog`,
    `https://cat-rescue-backend.web.app/update-dog?_id=${dogId}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ favorite: !favorite }),
    }
  );
  const pet = await fetchPets.json();
  // console.log(dog);
  return !favorite;
}





