import classes from "./ExploreBtn.module.scss";

const ExploreBtn = (props) => {
  return (
    <div className={classes.container}>
      {/* <span className={classes.outerRing} id="outerRing" />x */}
      <button className={classes.btn} onClick={props.onClick}>
        <h4>EXPLORE</h4>
      </button>
    </div>
  );
};

export default ExploreBtn;
