// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { Places } from "./data";

// export default function handler(req, res) {
//   if (Places) return res.status(200).json(Places);
//   return res.status(404).json({ error: "Data not found" });
// }

import { places } from "@/data/places";

export default function handler(req, res) {
  res.status(200).json(places);
}
