import classes from "./Header.module.scss";
import { ReactComponent as Logo } from "../../../assets/shared/logo.svg";
import RadioBtnsGroup from "../../radioBtnsGroup/RadioBtnsGroup";
const Header = (props) => {
  return (
    <div className={`${classes.container} ${props.className}`}>
      <Logo className={classes.logo} />
      <span className={classes.horizontalLine} />
      <div className={classes.navBox}>
        <RadioBtnsGroup
          className={classes.mainNav}
          name="mainNav"
          flexDirection="row"
          label={[
            {
              id: "00",
              value: "page-home",
              option: (
                <div className={classes.radioBtnLabel}>
                  <span className={classes.pageNumber}>00</span>HOME
                </div>
              ),
            },
            {
              id: "01",
              value: "page-destination",
              option: (
                <span className={classes.radioBtnLabel}>
                  <span className={classes.pageNumber}>01</span>DESTINATION
                </span>
              ),
            },
            {
              id: "02",
              value: "page-crew",
              option: (
                <span className={classes.radioBtnLabel}>
                  <span className={classes.pageNumber}>02</span>CREW
                </span>
              ),
            },
            {
              id: "03",
              value: "page-technology",
              option: (
                <span className={classes.radioBtnLabel}>
                  <span className={classes.pageNumber}>03</span>TECHNOLOGY
                </span>
              ),
            },
          ]}
          onChange
          isSelected
        />
      </div>
    </div>
  );
};

export default Header;
