import { useNavigate } from "react-router-dom";
import SubLayout from "../../components/subLayout/SubLayout";
import ExploreBtn from "./exploreBtn/ExploreBtn";
import classes from "./Home.module.scss";
import background from "../../assets/home/bg-desktop.jpg";
const Home = (props) => {
  const navigate = useNavigate();
  const onClickHander = () => {
    navigate("/technology");
  };
  return (
    <SubLayout
      className={classes.subLayout}
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
      rightHalf={<ExploreBtn onClick={onClickHander} />}
      background={background}
    />
    // <div className={classes.container}>
    //   <div className={classes.box}>
    //     <div className={classes.intro}>
    //       <h5>So, you want to travel to</h5>
    //       <h1>SPACE</h1>
    //       <p>
    //         Let’s face it; if you want to go to space, you might as well
    //         genuinely go to outer space and not hover kind of on the edge of it.
    //         Well sit back, and relax because we’ll give you a truly out of this
    //         world experience!
    //       </p>
    //     </div>
    //     <ExploreBtn onClick={onClickHander} />
    //   </div>
    // </div>
  );
};

export default Home;
