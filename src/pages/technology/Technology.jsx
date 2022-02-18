import classes from "./Technology.module.scss";
import SubLayout from "../../components/subLayout/SubLayout";
import data from "../../data.json";
import RadioBtnsGroup from "../../components/radioBtnsGroup/RadioBtnsGroup";
import { useMemo, useState } from "react/cjs/react.development";
import useNavByKeys from "../../hooks/useNavByKeys";
const Technology = (props) => {
  const [tabbed, setTabbed] = useState(0);

  /**
   * tab through the navigator useing the ArrowKeys or the mouse's Wheel
   * passing the navigator's state along with its state updating function
   */
  useNavByKeys(tabbed, setTabbed, 3);

  const backgroundUrl = "/assets/technology/background-technology-desktop.jpg";
  const info = data.technology;

  const techNavHandler = (e) => {
    const index = +e.target.id.split("-")[1];
    setTabbed(index);
  };

  /**
   *
   */
  const labels = useMemo(() => {
    return info.map((obj, i) => {
      return {
        id: `tech-${i}`,
        value: `${info[i].name.split(" ")[0].toLowerCase()}`,
        option: <h4>{i + 1}</h4>,
      };
    });
  }, [info]);

  /**
   * rendering the two page's sides right&left based on
   * the active desNav tab and the destionation JSON data
   */
  const pageSides = useMemo(() => {
    return {
      left: (
        <>
          <h5>
            <span>03</span> SPACE LAUNCH 101
          </h5>
          <div className={classes.subBox}>
            <RadioBtnsGroup
              className={classes.techNav}
              label={labels}
              flexDirection="column"
              name="techNav"
              onChange={techNavHandler}
              checked={`tech-${tabbed}`}
            />
            <div className={classes.info}>
              <span>THE TERMINOLOGY ...</span>
              <h3>{info[tabbed].name}</h3>
              <p>{info[tabbed].description}</p>
            </div>
          </div>
        </>
      ),
      right: (
        <img
          src={info[tabbed].images.portrait}
          className={`${classes.techImg}`}
        />
      ),
    };
  }, [info, tabbed]);
  return (
    <SubLayout
      className={classes.subLayout}
      background={backgroundUrl}
      rightHalf={pageSides.right}
      leftHalf={pageSides.left}
    />
  );
};

export default Technology;
