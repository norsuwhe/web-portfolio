import "./SubHeader.scss";

const SubHeader = ({ children, size }) => {
  return (
    <h2 className={`sub-header ${size ? "sub-header_small" : ""}`}>
      {children}
    </h2>
  );
};

export default SubHeader;
