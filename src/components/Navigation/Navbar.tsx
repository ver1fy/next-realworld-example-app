import Link from "next/link";
import { NavLink } from "./NavLink";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link href="/" className="navbar-brand">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right" role="menu">
          <li className="nav-item" role="menuitem">
            <NavLink href="/">Home</NavLink>
          </li>
          <li className="nav-item" role="menuitem">
            <NavLink href="/login">Sign in</NavLink>
          </li>
          <li className="nav-item" role="menuitem">
            <NavLink href="/register">Sign up</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
