import { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { pxLogo } from "../../assets";
import c from "./style.module.css";

const Navbar = ({ value, handleSearch }) => {
  const handleSearchBtn = () => {};

  return (
    <div className={`${c.navbar} flex`}>
      <div className={c.nav__logo__wrapper}>
        <Link to="/">
          <img src={pxLogo} alt="" className={c.nav__logo} />
        </Link>
      </div>

      <div className={`${c.search__input__wrapper} flex`}>
        <input
          type="text"
          placeholder="Search for images..."
          value={value}
          onChange={handleSearch}
        />
        <button onClick={handleSearchBtn}>
          <BsSearch />
        </button>
      </div>

      <div className={`${c.user__profile} flex`}>
        
      </div>
    </div>
  );
};

export default Navbar;
