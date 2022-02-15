import classes from "./SubLayout.module.scss";
import PropTypes from "prop-types";
const SubLayout = (props) => {
  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `url(${props.background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className={`${classes.box} ${props.className}`}>
        <div className={classes.leftHalf}>{props.leftHalf}</div>
        <div className={classes.rightHalf}>{props.rightHalf}</div>
      </div>
    </div>
  );
};

SubLayout.propTypes = {
  background: PropTypes.string,
  leftHalf: PropTypes.node.isRequired,
  rightHalf: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SubLayout;
