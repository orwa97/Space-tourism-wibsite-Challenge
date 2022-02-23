import SubLayout from "../../components/subLayout/SubLayout";
import classes from "./Crew.module.scss";
import data from "../../data.json";
import RadioBtnsGroup from "../../components/radioBtnsGroup/RadioBtnsGroup";
import { useMemo, useState } from "react/cjs/react.development";
import useNavByKeys from "../../hooks/useNavByKeys";
import useMediaQueries from "../../hooks/useMediaQueries";
const Crew = (props) => {
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

  const backgroundUrl = "./assets/crew/background-crew-desktop.jpg";
  const info = data.crew;
  const crewNavHandler = (e) => {
    const index = +e.target.id.split("-")[1];
    setTabbed(index);
  };

  /**
   *
   */
  const labels = useMemo(() => {
    return info.map((obj, i) => {
      return {
        id: `crew-${i}`,
        value: `${info[i].name.split(" ")[0].toLowerCase()}`,
        option: <div className={classes.labelBox}></div>,
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
            <span>02</span> MEET THE CREW
          </h5>
          <h4>{info[tabbed].role}</h4>
          <h3>{info[tabbed].name}</h3>
          <p>{info[tabbed].bio}</p>
          <RadioBtnsGroup
            className={classes.crewNav}
            label={labels}
            flexDirection="row"
            name="crewNav"
            onChange={crewNavHandler}
            checked={`crew-${tabbed}`}
          />
        </>
      ),
      right: (
        <>
          <img
            src={info[tabbed].images.webp}
            className={`${classes.crewImg}`}
          />
        </>
      ),
    };
  }, [info, tabbed]);
  return (
    <SubLayout
      className={`${classes.subLayout} ${classes[mediaQuery]}`}
      background={backgroundUrl}
      rightHalf={pageSides.right}
      leftHalf={pageSides.left}
    />
  );
};

export default Crew;
