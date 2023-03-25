import { Link } from "react-router-dom";
import { pxLogo } from "../../assets";
import c from "./style.module.css";

const Navbar = () => {
  return (
    <div className={`${c.navbar} flex`}>
      <div className={c.nav__logo__wrapper}>
        <Link to="/">
          <img src={pxLogo} alt="" className={c.nav__logo} />
        </Link>
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
  );
};

export default Navbar;
