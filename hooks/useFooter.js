//fetches products from api using useQuery
import { getFooter } from "../lib/getFooter";
import { useQuery } from "@tanstack/react-query";

export const useFooter = () =>
  useQuery({ queryKey: ["footer"], queryFn: getFooter });
