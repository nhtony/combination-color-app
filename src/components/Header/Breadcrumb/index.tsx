import "./Breadcrumb.scss";
interface Props {
  selectedName: string;
}

const Breadcrumb = ({ selectedName }: Props) => {
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
        {selectedName}
      </a>
    </nav>
  );
};

export default Breadcrumb;
