export async function updateFavorite(catId, favorite) {
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





