import { observer } from "mobx-react-lite";
import {
  BrowseTemplate,
  Header,
  HeroCombination,
  RelatedCombination,
} from "./components";
import "./App.scss";
import { useEffect } from "react";
import combinationStore from "./stores/CombinationStore";

const App = observer(() => {
  const combination = combinationStore.currentCombination.combination;

  const gradientStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "70vh",
    background: combination?.color?.hex,
    zIndex: 0,
  };

  useEffect(() => {
    combinationStore.init();
  }, []);

  if (combinationStore.networkState === "pending") {
    return <div>Loading...</div>;
  }

  if (combinationStore.networkState === "error") {
    return <div>Loading combinations failed!</div>;
  }

  return (
    <div className="app">
      <div style={gradientStyle}></div>
      <div className="container">
        <Header />
        <HeroCombination />
        <RelatedCombination />
        <BrowseTemplate />
      </div>
    </div>
  );
});

export default App;
