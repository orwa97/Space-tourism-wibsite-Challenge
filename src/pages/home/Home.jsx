import ExploreBtn from "./exploreBtn/ExploreBtn";
import classes from "./Home.module.scss";
const Home = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.intro}>
          <h5>
            So, you want to travel to Space Let’s face it; if you want to go to
          </h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <ExploreBtn />
      </div>
    </div>
  );
};

export default Home;
