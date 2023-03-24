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

      <div className={`${c.navbar__actions} flex`}>
        <div className={`${c.search__input__wrapper} flex`}>
          <input
            className={c.search__input}
            type="text"
            placeholder="Search for images..."
            value={value}
            onChange={handleSearch}
          />
          <button className={c.search__btn} onClick={handleSearchBtn}>
            <BsSearch />
          </button>
        </div>

        <div className={`${c.user__profile} flex`}>
          <Link to="/profile">
            <img
              className={c.user}
              src="https://api.dicebear.com/5.x/adventurer/svg?size=48&hair=short16&seed=Aneka"
              alt="user profile image"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
