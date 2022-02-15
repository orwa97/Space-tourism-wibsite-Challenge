import classes from "./SubLayout.module.scss";
import PropTypes from "prop-types";
const SubLayout = (props) => {
  return (
    <div
      className={classes.container}
      style={{
        background: `url(${props.background}) no-repeat center center fixed`,
        backgroundSize: "cover",
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
  rightHalf: PropTypes.element.isRequired,
  className: PropTypes.string,
};

export default SubLayout;
