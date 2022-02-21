import { useMediaQuery } from "react-responsive";
const useMediaQueries = () => {
  const isBigScreen = useMediaQuery({ minWidth: 1281 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const istablet = useMediaQuery({ minWidth: 641 });
  const isSmartPhone = useMediaQuery({ minWidth: 320 });

  return { isBigScreen, isDesktop, istablet, isSmartPhone };
};

export default useMediaQueries;
