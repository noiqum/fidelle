import Brand from "../Brand/Brand";
import HomeIcon from "../HomeIcon/HomeIcon";
import NavLink from "../NavLink/NavLink";

export default function Navigation() {
  return (
    <div>
      <HomeIcon />
      <Brand />
      <>
        <NavLink type="auth" />
        <NavLink type="cart" />
      </>
    </div>
  );
}
