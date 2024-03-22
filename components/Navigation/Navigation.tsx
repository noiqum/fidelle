import Brand from "../Brand/Brand";
import HomeIcon from "../HomeIcon/HomeIcon";
import NavLink from "../NavLink/NavLink";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <nav className="Navigation">
      <HomeIcon />
      <Brand />
      <div className="Navigation__links">
        <NavLink type="auth" />
        <NavLink type="cart" />
      </div>
    </nav>
  );
}
