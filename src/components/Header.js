import React from "react";
import { FaReact } from "react-icons/fa";

const Header = () => {
  return (
    <h1 className="text-center d-flex align-items-center justify-content-center gap-3">
      <FaReact /> ToDo <FaReact />
    </h1>
  );
};

export default Header;
