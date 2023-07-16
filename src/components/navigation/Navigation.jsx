import React, { useState } from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Drawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleDrawer={toggleDrawer}
      />
      <Navbar toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navigation;
