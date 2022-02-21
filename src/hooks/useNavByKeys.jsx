import { useEffect, useState } from "react";
import { useMemo } from "react/cjs/react.development";

/**
 *
 * @param {Number} state : tab's id
 * @param {function} setState
 * @param {Number} num : the number of tabs
 * @param {Boolean} {wheel, arrows}
 */
const useNavByKeys = (
  state,
  setState,
  num,
  { wheel, arrows } = { wheel: true, arrows: true }
) => {
  const windowEventHandler = (e) => {
    const event = e.type === "wheel" ? +e.wheelDelta : e.key;
    if (
      (event === "ArrowLeft" || event === "ArrowUp") & arrows ||
      (event > 0) & wheel
    ) {
      setState((prev) => (prev != 0 ? prev - 1 : prev));
    }
    if (
      (event === "ArrowRight" || event === "ArrowDown") & arrows ||
      (event < 0) & wheel
    ) {
      setState((prev) => (prev != num - 1 ? prev + 1 : prev));
    }
  };
  useEffect(() => {
    ["wheel", "keydown"].forEach((e) => {
      window.addEventListener(e, windowEventHandler);
    });

    return () => {
      ["wheel", "keydown"].forEach((e) => {
        window.removeEventListener(e, windowEventHandler);
      });
    };
  }, [state, setState, num, arrows, wheel]);
};

export default useNavByKeys;
