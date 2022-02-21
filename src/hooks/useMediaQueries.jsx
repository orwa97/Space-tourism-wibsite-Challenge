import { useMediaQuery } from "react-responsive";
import { useMemo } from "react/cjs/react.development";
/**
 *
 * @returns className based on the media query.
 * ClassName (string): bigScreen, desktop, tablet or smartPhone.
 */

const useMediaQueries = () => {
  const isBigScreen = useMediaQuery({ minWidth: 1281 });
  const isDesktop = useMediaQuery({ maxWidth: 1280, minWidth: 1025 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isSmartPhone = useMediaQuery({ maxWidth: 640 });

  const className = useMemo(() => {
    if (isBigScreen) {
      return "bigScreen";
    } else if (isDesktop) {
      return "desktop";
    } else if (isTablet) {
      return "tablet";
    } else if (isSmartPhone) {
      return "smartPhone";
    } else return null;
  }, [isBigScreen, isDesktop, isTablet, isSmartPhone]);

  return className;
};

export default useMediaQueries;
