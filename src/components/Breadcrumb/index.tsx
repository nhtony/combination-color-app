import "./Breadcrumb.scss";
type Props = {};

const Breadcrumb = (props: Props) => {
  return (
    <nav className="breadcrumb">
      <a href="#" className="breadcrumb__link">
        Colors
      </a>
      <span className="breadcrumb__separator">{">"}</span>
      <a href="#" className="breadcrumb__link">
        Color Palettes
      </a>
      <span className="breadcrumb__separator">{">"}</span>
      <a href="#" className="breadcrumb__link">
        Pastel Blonde
      </a>
    </nav>
  );
};

export default Breadcrumb;
