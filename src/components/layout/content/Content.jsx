import classes from "./Content.module.scss";

const Content = (props) => {
  return <main className={classes.container}>{props.children}</main>;
};

export default Content;
