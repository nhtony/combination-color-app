import Breadcrumb from "../Breadcrumb";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Breadcrumb />
      <h1 className="header__title">
        Pastel Blonde
        <br />
        color combination
      </h1>
    </header>
  );
};

export default Header;
