export async function updateFavorite(species) {
  // PATCH cat or dog collection with a body of { favorite: true}
  const fetchPets = await fetch(
    `http://localhost:5001/cat-rescue-backend/us-central1/api/update-${species}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ favorite: true }),
    }
  );
  const cat = await fetchPets.json();
  const favorited = cat.favorite;
  favorited = true;
  return favorited;
}
