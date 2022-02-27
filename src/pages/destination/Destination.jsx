import Content from "../../components/layout/content/Content";
import SubLayout from "../../components/subLayout/SubLayout";
import classes from "./Destination.module.scss";
import data from "../../data.json";
import RadioBtnsGroup from "../../components/radioBtnsGroup/RadioBtnsGroup";
import { useMemo, useState } from "react";
import useNavByKeys from "../../hooks/useNavByKeys";
import useMediaQueries from "../../hooks/useMediaQueries";
const Destination = (props) => {
  const [tabbed, setTabbed] = useState(0);
  const mediaQuery = useMediaQueries();
  const device = mediaQuery.split("-")[0];

  /**
   * tab through the navigator useing the ArrowKeys or the mouse's Wheel
   * passing the navigator's state along with its state updating function
   */
  useNavByKeys(tabbed, setTabbed, 4, {
    wheel: (device === "bigScreen") | (device === "desktop"),
    arrows: true,
  });

  const backgroundUrl = `./assets/destination/background-destination-${device}.jpg`;
  const info = data.destinations;

  const destNavHandler = (e) => {
    const index = +e.target.id.split("-")[1];
    setTabbed(index);
  };

  /**
   * maping through the destination data to create
   * the destination's navigator labels (array of objects)
   */
  const labels = useMemo(() => {
    return info.map((obj, i) => {
      return {
        id: `desNav-${i}`,
        value: info[i].name.toLowerCase(),
        option: (
          <span className={classes.tabName}>{info[i].name.toUpperCase()}</span>
        ),
      };
    });
  }, [info]);

  /**
   * rendering the two page's sides right&left based on
   * the active desNav tab and the destionation JSON data
   */
  const pageSides = useMemo(() => {
    return {
      right: (
        <>
          <RadioBtnsGroup
            className={classes.desNav}
            name="desNav"
            flexDirection="row"
            label={labels}
            onChange={destNavHandler}
            checked={`desNav-${tabbed}`}
          />
          <h2>{info[tabbed].name}</h2>
          <p>{info[tabbed].description}</p>
          <span className={classes.horizontalLine} />
          <div className={classes.travel}>
            <div className={classes.distance}>
              <span>AVG. DISTANCE</span>
              <span>{info[tabbed].distance}</span>
            </div>
            <div className={classes.duration}>
              <span>EST. TRAVEL TIME</span>
              <span>{info[tabbed].travel}</span>
            </div>
          </div>
        </>
      ),
      left: (
        <>
          <h5>
            <span>01</span> PICK YOUR DESTINATION
          </h5>
          <img
            src={info[tabbed].images.webp}
            className={`${classes.destImg}`}
          />
        </>
      ),
    };
  }, [tabbed, info]);

  return (
    <SubLayout
      className={`${classes.subLayout} ${classes[mediaQuery]}`}
      background={backgroundUrl}
      leftHalf={pageSides.left}
      rightHalf={pageSides.right}
    />
  );
};

export default Destination;
