import classes from "./ExploreBtn.module.scss";

const ExploreBtn = (props) => {
  return (
    <button className={classes.btn} onClick={props.onClick}>
      <h4>Explore</h4>
    </button>
  );
};

export default ExploreBtn;
