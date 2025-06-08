import { observer } from "mobx-react-lite";
import Breadcrumb from "./Breadcrumb";
import "./header.scss";
import { CombinationStore } from "../../stores";

const Header = observer(() => {
  const defaultCombination = CombinationStore.defaultCombination.combination;
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
