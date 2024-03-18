import Link from "next/link";
import "./HomeIcon.scss";
export default function HomeIcon() {
  return (
    <Link href="/" className="HomeIcon">
      <div className="HomeIcon__Line"></div>
      <div className="HomeIcon__Line"></div>
      <div className="HomeIcon__Line"></div>
    </Link>
  );
}
