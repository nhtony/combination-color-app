import { makeAutoObservable } from "mobx";
import { fetchAllCombinations } from "../../services/fetchAllCombinations";
import {
  CombinationResponse,
  MainCombination,
  RelatedCombinationType,
} from "../../constants/types";

type NetworkState = "pending" | "done" | "error";

const createMainCombination = (
  relatedCombination: RelatedCombinationType
): CombinationResponse => {
  return {
    combination: {
      id: relatedCombination.id,
      name: relatedCombination.name,
      slug: relatedCombination.slug,
      likes: relatedCombination.likes,
      liked: relatedCombination.liked,
      colors: relatedCombination.colors.map((hex) => ({
        hex,
        name: "",
        slug: hex.replace("#", "").toLowerCase(),
      })),
      featuredImage: {
        alt: "",
        url: "",
      },
      color: {
        hex: relatedCombination.colors[0] || "#000000",
        name: relatedCombination.name,
        slug: relatedCombination.slug,
      },
    },
    relatedCombinations: [],
  };
};

class CombinationStore {
  private combinations: CombinationResponse[] = [];
  private selectedCombinationId: number | null = null;
  networkState: NetworkState = "pending";
  constructor() {
    makeAutoObservable(this);
  }

  async init() {
    await this.getCombinations();
  }

  async getCombinations() {
    try {
      this.setNetworkState("pending");
      const resp = await fetchAllCombinations();
      this.setCombinations(resp);
      this.setNetworkState("done");
    } catch (error) {
      this.setNetworkState("error");
    }
  }

  setSelectedCombination(id: number | null) {
    this.selectedCombinationId = id;
  }

  updateCombinationColor(
    combinationId: number | null,
    colorIndex: number,
    newColor: string
  ) {
    const updateComb = this.combinations.find(
      (comb) => comb.combination.id === combinationId
    );

    if (updateComb) {
      updateComb.combination.colors[colorIndex].hex = newColor;
    }
  }

  get currentCombination(): CombinationResponse {
    if (this.selectedCombinationId) {
      const selectedCombination = this.combinations.find(
        (comb) => comb.combination.id === this.selectedCombinationId
      );

      if (selectedCombination) {
        return selectedCombination;
      }

      for (const comb of this.combinations) {
        const selectedRelatedComb = comb.relatedCombinations.find(
          (relatedComb) => relatedComb.id === this.selectedCombinationId
        );

        if (selectedRelatedComb) {
          return createMainCombination(selectedRelatedComb);
        }
      }
    }

    return this.defaultCombination;
  }

  get defaultCombination(): CombinationResponse {
    return this.combinations[0]
      ? this.combinations[0]
      : {
          combination: {} as MainCombination,
          relatedCombinations: [],
        };
  }

  private setNetworkState(state: NetworkState) {
    this.networkState = state;
  }

  private setCombinations(combinations: CombinationResponse[]) {
    this.combinations = combinations;
  }
}

const combinationStore = new CombinationStore();

export default combinationStore;
