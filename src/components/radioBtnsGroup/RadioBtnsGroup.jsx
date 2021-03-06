import classNames from "classnames";
import PropTypes from "prop-types";
import "./RadioBtnsGroup.scss";
const RadioBtnsGroup = (props) => {
  const labels = props.label.map((item, i) => {
    return (
      <div className={`radioBtn`} key={item.id}>
        <input
          type="radio"
          id={item.id}
          value={item.value}
          name={props.name}
          onChange={props.onChange}
          checked={props.checked === item.id}
        ></input>

        <label className="radio-label" htmlFor={item.id}>
          {Object.keys(item).includes("option") ? item.option : null}
        </label>
      </div>
    );
  });
  return (
    <div
      className={classNames(
        "radioBtnsBox",
        { vertically: props.flexDirection === "column" },
        { horizontally: props.flexDirection === "row" },
        props.className
      )}
    >
      {labels}
    </div>
  );
};

RadioBtnsGroup.propTypes = {
  label: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  flexDirection: PropTypes.string,
  classNames: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.string,
};

export default RadioBtnsGroup;
