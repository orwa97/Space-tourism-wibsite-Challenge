import classNames from "classnames";
import "./RadioBtnsGroup.scss";
const RadioButtonsGroup = (props) => {
  const labels = props.label.map((item, i) => {
    return (
      <div className={`radioBtn`} key={item.id}>
        <input
          type="radio"
          id={`btn-${item.id}`}
          value={item.value}
          name={props.name}
          onChange={props.onChange}
          checked={props.isSelected === `btn-${item.id}`}
        ></input>

        <label className="radio-label" htmlFor={`btn-${item.id}`}>
          {item.option}
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

export default RadioButtonsGroup;
