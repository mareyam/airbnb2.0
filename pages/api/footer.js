// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { footer } from "@/data/footer";

export default function handler(req, res) {
  res.status(200).json(footer);
}
