import classes from "./Header.module.scss";
import RadioBtnsGroup from "../../radioBtnsGroup/RadioBtnsGroup";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useMediaQueries from "../../../hooks/useMediaQueries";
const Header = (props) => {
  const [isChecked, setIsChecked] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
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
          <span className={classes.radioBtnLabel}>
            <span className={classes.pageNumber}>00</span>HOME
          </span>
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
    setTimeout(() => {
      setIsOpen((prev) => !prev);
    }, 200);
  }, []);
  const mobileNavHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`${classes.container} ${props.className} ${classes[mediaQuery]}`}
    >
      <object
        type="image/svg+xml"
        data="/assets/svg/logo.svg"
        alt="main-logo"
        className={classes.logo}
      ></object>

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
          <button onClick={mobileNavHandler} className={`${classes.navBtn}`}>
            {!isOpen && <img src="/assets/svg/nav.svg" alt="nav-button" />}
            {isOpen && <img src="/assets/svg/close.svg" alt="nav-button" />}
          </button>
          <div
            className={`${classes.navBox} ${
              isOpen ? classes.isOpen : classes.isClosed
            }`}
          >
            <RadioBtnsGroup
              className={classes.mainNav}
              name="mainNav"
              flexDirection="column"
              label={labels}
              onChange={mainNavHandler}
              checked={isChecked}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
