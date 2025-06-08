import { CombinationResponse } from "../constants/types";
import combinationsData from "../data/combinations.json";

export const fetchAllCombinations = (): CombinationResponse[] => {
  try {
    return combinationsData.combinations;
  } catch (error) {
    console.error("Error fetching all combinations:", error);
    throw new Error("Failed to fetch combinations");
  }
};
