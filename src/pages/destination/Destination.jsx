import Content from "../../components/layout/content/Content";
import SubLayout from "../../components/subLayout/SubLayout";
import classes from "./Destination.module.scss";
import background from "../../assets/destination/background-destination-desktop.jpg";
import data from "../../data.json";
import RadioBtnsGroup from "../../components/radioBtnsGroup/RadioBtnsGroup";
import { useMemo, useState } from "react";
const Destination = (props) => {
  const [tabbed, setTabbed] = useState("desNav-0");
  const info = data.destinations;

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
  }, []);

  const destNavHandler = (e) => {
    setTabbed(e.target.id);
  };

  return (
    <SubLayout
      className={classes.subLayout}
      background={background}
      leftHalf={
        <>
          <h5>
            <span>01</span> PICK YOUR DESTINATION
          </h5>
        </>
      }
      rightHalf={
        <>
          <RadioBtnsGroup
            className={classes.destinationNav}
            name="desNav"
            flexDirection="row"
            label={labels}
            onChange={destNavHandler}
            checked={tabbed}
          />
          <img />
        </>
      }
    />
  );
};

export default Destination;
