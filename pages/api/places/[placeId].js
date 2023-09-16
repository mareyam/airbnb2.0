import data from "../data";

export default function handler(req, res) {
  const { placeId } = req.query;
  const { places } = data;

  if (placeId) {
    const place = places.find((value) => value.id == placeId);
    return res.status(200).json(place);
  }

  return res.status(404).json({ error: "Place not found" });
}
