import { observer } from "mobx-react-lite";
import Breadcrumb from "./Breadcrumb";
import { CombinationStore } from "../../stores";
import "./header.scss";

const Header = observer(() => {
  const defaultCombination = CombinationStore.currentCombination.combination;
  return (
    <header className="header">
      <Breadcrumb selectedName={defaultCombination.name} />
      <h1 className="header__title">
        {defaultCombination.name}
        <br />
        color combination
      </h1>
    </header>
  );
});

export default Header;
