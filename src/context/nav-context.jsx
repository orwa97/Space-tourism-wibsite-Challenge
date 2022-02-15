import React, { useState } from "react";
const NavContext = React.createContext({
  onChange: () => {},
});

export const NavContextProvider = (props) => {
  const [tabbed, setTabbed] = useState("home");
  const navHandler = (e) => {
    setTabbed(e.tabbed.v);
  };
  return <NavContext.Provider>{props.children}</NavContext.Provider>;
};

export default NavContext;
