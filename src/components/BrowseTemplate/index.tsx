import "./browseTemplate.scss";
type Props = {};

const BrowseTemplate = (props: Props) => {
  return (
    <section className="browseTemplate">
      <h3 className="browseTemplate__title">
        Use this color palette and create beautiful designs and documents!
      </h3>
      <button className="browseTemplate__button">Browse templates</button>
    </section>
  );
};

export default BrowseTemplate;
