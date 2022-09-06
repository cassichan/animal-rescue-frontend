export async function updateFavorite() {
  const fetchPets = await fetch(
    // `http://localhost:5001/cat-rescue-backend/us-central1/api/update-cat`,
    `https://cat-rescue-backend.web.app/update-cat`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ favorite: true }),
    }
  );
  const cat = await fetchPets.json();
  console.log(cat);
  let favorited = cat.favorite;
  favorited = true;
  return favorited;
}
