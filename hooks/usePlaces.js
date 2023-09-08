//fetches products from api using useQuery
import { getPlaces } from "../lib/helper";
import { useQuery } from "@tanstack/react-query";

export const usePlaces = () =>
  useQuery({ queryKey: ["places"], queryFn: getPlaces });
