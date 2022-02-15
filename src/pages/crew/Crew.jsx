import Content from "../../components/layout/content/Content";
import SubLayout from "../../components/subLayout/SubLayout";
import classes from "./Crew.module.scss";
import data from "../../data.json";
import RadioBtnsGroup from "../../components/radioBtnsGroup/RadioBtnsGroup";
import { useMemo, useState } from "react/cjs/react.development";

const Crew = (props) => {
  const [tabbed, setTabbed] = useState(0);
  const backgroundUrl = "./assets/crew/background-crew-desktop.jpg";
  const info = data.crew;

  const crewNavHandler = (e) => {
    const index = e.target.id.split("-")[0];
    setTabbed(index);
  };

  /**
   *
   */
  const labels = useMemo(() => {
    return info.map((obj, i) => {
      return {
        id: `crew-${i}`,
        value: `${info[i].name.split(" ")[0]}`,
        option: "",
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
            classNames={classes.crewNav}
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
            className={`${classes.destImg}`}
          />
        </>
      ),
    };
  }, [info]);
  return (
    <SubLayout
      className={classes.subLayout}
      background={backgroundUrl}
      rightHalf={pageSides.right}
      leftHalf={pageSides.left}
    />
  );
};

export default Crew;
