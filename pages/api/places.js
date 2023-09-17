import data from "./data";

export default function handler(req, res) {
  const { Places } = data;
  if (Places) return res.status(200).json(Places);
  return res.status(404).json({ error: "not found" });
}
