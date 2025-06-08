import {
  BrowseTemplate,
  Header,
  HeroCombination,
  RelatedCombination,
} from "./components";
import "./App.scss";
import { useEffect } from "react";
import combinationStore from "./stores/CombinationStore";

function App() {
  useEffect(() => {
    combinationStore.init();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <Header />
        <HeroCombination />
        <RelatedCombination />
        <BrowseTemplate />
      </div>
    </div>
  );
}

export default App;
