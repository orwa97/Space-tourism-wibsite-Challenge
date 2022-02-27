import classes from "./SubLayout.module.scss";
import PropTypes from "prop-types";
import useMediaQueries from "../../hooks/useMediaQueries";
const SubLayout = (props) => {
  const mediaQuery = useMediaQueries();
  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `url(${props.background})`,
      }}
    >
      <div
        className={`${classes.box} ${props.className} ${classes[mediaQuery]}`}
      >
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
