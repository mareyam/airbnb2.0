const baseURL = "http://localhost:3000/api/places/place";

export default async function getHelper(id) {
  const res = await fetch(`${baseURL}`);
  const places = await res.json();

  if (id) {
    return places.find((value) => value.id == id);
  }
  return places;
}
