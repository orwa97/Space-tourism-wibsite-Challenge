import classes from "./Technology.module.scss";
import SubLayout from "../../components/subLayout/SubLayout";
import data from "../../data.json";
import RadioBtnsGroup from "../../components/radioBtnsGroup/RadioBtnsGroup";
import { useMemo, useState } from "react/cjs/react.development";
import useNavByKeys from "../../hooks/useNavByKeys";
import useMediaQueries from "../../hooks/useMediaQueries";
const Technology = (props) => {
  const [tabbed, setTabbed] = useState(0);
  const mediaQuery = useMediaQueries();
  const device = mediaQuery.split("-")[0];

  /**
   * tab through the navigator useing the ArrowKeys or the mouse's Wheel
   * passing the navigator's state along with its state updating function
   */
  useNavByKeys(tabbed, setTabbed, 3, {
    wheel: device === "desktob",
    arrows: true,
  });

  const info = data.technology;
  const backgroundUrl = "/assets/technology/background-technology-desktop.jpg";

  /**
   * return the destination image url & the tabs flex-direction
   * based on the media query & the tebbed nav.
   */
  const [imgUrl, flexDirection] = useMemo(() => {
    if (device === "bigScreen") {
      const url = info[tabbed].images.portrait;
      return [url, "column"];
    } else if (device === "desktop") {
      const url = info[tabbed].images.portrait;
      return [url, "row"];
    } else {
      const url = info[tabbed].images.landscape;
      return [url, "row"];
    }
  }, [tabbed, mediaQuery]);

  const techNavHandler = (e) => {
    const index = +e.target.id.split("-")[1];
    setTabbed(index);
  };

  /**
   * return the radioBtns labels (the navigator)
   * based on the info object (destination json data)
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
    const device = mediaQuery.split("-")[0];
    const isDesktop = (device === "bigScreen") | (device === "desktop");
    return {
      left: (
        <>
          {isDesktop && (
            <h5>
              <span>03</span> SPACE LAUNCH 101
            </h5>
          )}
          <div className={classes.subBox}>
            <RadioBtnsGroup
              className={classes.techNav}
              label={labels}
              flexDirection={flexDirection}
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
        <>
          {!isDesktop && (
            <h5>
              <span>03</span> SPACE LAUNCH 101
            </h5>
          )}
          <img src={imgUrl} className={`${classes.techImg}`} />
        </>
      ),
    };
  }, [info, tabbed, imgUrl, mediaQuery, flexDirection]);
  return (
    <SubLayout
      className={`${classes.subLayout} ${classes[mediaQuery]}`}
      background={backgroundUrl}
      rightHalf={pageSides.right}
      leftHalf={pageSides.left}
    />
  );
};

export default Technology;
