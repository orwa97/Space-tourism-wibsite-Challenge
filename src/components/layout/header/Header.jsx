import classes from "./Header.module.scss";
import { ReactComponent as Logo } from "../../../logo.svg";
import RadioBtnsGroup from "../../radioBtnsGroup/RadioBtnsGroup";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useMediaQueries from "../../../hooks/useMediaQueries";
const Header = (props) => {
  const location = useLocation();
  const [isChecked, setIsChecked] = useState("home");
  const navigateTo = useNavigate();
  const mediaQuery = useMediaQueries();
  const device = mediaQuery.split("-")[0];

  /**
   *
   */
  const labels = useMemo(() => {
    return [
      {
        id: "mainNav-00",
        value: "home",
        option: (
          <div className={classes.radioBtnLabel}>
            <span className={classes.pageNumber}>00</span>HOME
          </div>
        ),
      },
      {
        id: "mainNav-01",
        value: "destination",
        option: (
          <span className={classes.radioBtnLabel}>
            <span className={classes.pageNumber}>01</span>DESTINATION
          </span>
        ),
      },
      {
        id: "mainNav-02",
        value: "crew",
        option: (
          <span className={classes.radioBtnLabel}>
            <span className={classes.pageNumber}>02</span>CREW
          </span>
        ),
      },
      {
        id: "mainNav-03",
        value: "technology",
        option: (
          <span className={classes.radioBtnLabel}>
            <span className={classes.pageNumber}>03</span>TECHNOLOGY
          </span>
        ),
      },
    ];
  }, []);

  useEffect(() => {
    const pathname = location.pathname;
    for (const obj of labels) {
      if (obj.value === pathname.replace("/", "")) {
        setIsChecked(obj.id);
        break;
      }
    }
  }, [location]);

  const mainNavHandler = useCallback((e) => {
    setIsChecked(e.target.id);
    navigateTo(`${e.target.value}`);
  }, []);

  return (
    <div
      className={`${classes.container} ${props.className} ${classes[mediaQuery]}`}
    >
      <object
        type="image/svg+xml"
        data="/assets/svg/logo.svg"
        className={classes.logo}
      ></object>

      {/* <Logo className={classes.logo} /> */}
      {device != "smartPhone" && (
        <>
          <span className={classes.horizontalLine} />
          <div className={classes.navBox}>
            <RadioBtnsGroup
              className={classes.mainNav}
              name="mainNav"
              flexDirection="row"
              label={labels}
              onChange={mainNavHandler}
              checked={isChecked}
            />
          </div>
        </>
      )}
      {device === "smartPhone" && (
        <>
          <object type="image/svg+xml" data="/assets/svg/nav.svg"></object>
        </>
      )}
    </div>
  );
};

export default Header;
