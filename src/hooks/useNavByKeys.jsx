import { useEffect, useState } from "react";

/**
 *
 * @param {number} state : tab's id
 * @param {function} setState
 */
const useNavByKeys = (state, setState) => {
  //   const [tabbed, setTabbed] = useState();
  const windowEventHandler = (e) => {
    const event = e.type === "wheel" ? +e.wheelDelta : e.key;
    if (event === "ArrowLeft" || event === "ArrowUp" || event > 0) {
      setState((prev) => (prev != 0 ? prev - 1 : prev));
    }
    if (event === "ArrowRight" || event === "ArrowDown" || event < 0) {
      setState((prev) => (prev != 3 ? prev + 1 : prev));
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
  }, [state, setState]);
};

export default useNavByKeys;
