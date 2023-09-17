import {Places} from '../data';

export default function handler(req, res) {
    if (Places) return res.status(200).json(Places);
    return res.status(404).json({ error: "Data not found" });
}