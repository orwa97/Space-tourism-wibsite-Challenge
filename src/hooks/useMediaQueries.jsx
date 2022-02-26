import { useMediaQuery } from "react-responsive";
import { useMemo } from "react/cjs/react.development";

/**
 * @returns className based on the media query.
 */

const useMediaQueries = () => {
  const isBigScreen = useMediaQuery({ minWidth: 1281 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const isTablet = useMediaQuery({ minWidth: 641 });
  const isSmartPhone = useMediaQuery({ maxWidth: 640 });

  const className = useMemo(() => {
    if (isBigScreen) {
      return "bigScreen-1281minWidth";
    } else if (isDesktop) {
      return "desktop-1025minWidth";
    } else if (isTablet) {
      return "tablet-641minWidth";
    } else if (isSmartPhone) {
      return "smartPhone-640maxWidth";
    } else return "default-0minWidth";
  }, [isBigScreen, isDesktop, isTablet, isSmartPhone]);

  return className;
};

export default useMediaQueries;
