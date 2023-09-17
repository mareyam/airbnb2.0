// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { places } from "@/data/places";
import { Places } from "./data";

export default function handler(req, res) {
  // const { Places } = data;
  if (Places) return res.status(200).json(Places);
  return res.status(404).json({ error: "Data not found" });
}
