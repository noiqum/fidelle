import Link from "next/link";
import "./NavLink.scss";
import UserIcon from "../../public/assets/svg/user.svg";
import CartIcon from "../../public/assets/svg/cart.svg";
import Image from "next/image";
type NavLinkType = "auth" | "cart";
interface Props {
  type: NavLinkType;
}

const href = {
  auth: "/auth",
  cart: "/cart",
};
const icon = {
  auth: UserIcon,
  cart: CartIcon,
};

export default function NavLink({ type }: Props) {
  return (
    <Link href={href[type]} className="NavLink">
      <Image width={32} height={32} src={icon[type]} alt={type}></Image>
      {type}
    </Link>
  );
}
