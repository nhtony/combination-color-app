import { makeAutoObservable } from "mobx";
import { fetchAllCombinations } from "../../services/fetchAllCombinations";
import {
  CombinationResponse,
  MainCombination,
} from "../../constants/types";

type NetworkState = "pending" | "done" | "error";

class CombinationStore {
  private combinations: CombinationResponse[] = [];
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
