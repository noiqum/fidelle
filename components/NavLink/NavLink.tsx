import Link from "next/link";
import "./NavLink.scss";
type NavLinkType = "auth" | "cart";
interface Props {
  type: NavLinkType;
}

const href = {
  auth: "/auth",
  cart: "/cart",
};

export default function NavLink({ type }: Props) {
  return (
    <Link href={href[type]} className="NavLink">
      {type}
    </Link>
  );
}
