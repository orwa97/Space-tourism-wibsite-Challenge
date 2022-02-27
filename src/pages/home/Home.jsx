import { useNavigate } from "react-router-dom";
import SubLayout from "../../components/subLayout/SubLayout";
import useMediaQueries from "../../hooks/useMediaQueries";
import ExploreBtn from "./exploreBtn/ExploreBtn";
import classes from "./Home.module.scss";
const Home = (props) => {
  const navigate = useNavigate();
  const mediaQuery = useMediaQueries();
  const device = mediaQuery.split("-")[0];

  const onClickHander = () => {
    navigate("/destination");
  };

  return (
    <SubLayout
      className={`${classes.subLayout} ${classes[mediaQuery]}`}
      leftHalf={
        <>
          <h5>So, you want to travel to</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </>
      }
      rightHalf={
        <ExploreBtn onClick={onClickHander} className={classes.expBtn} />
      }
      background={`/assets/home/bg-${device}.jpg`}
    />
  );
};

export default Home;
