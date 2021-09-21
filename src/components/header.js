import React from "react";
import { Link } from "gatsby";
import * as styles from "./header.module.scss";

const Header = () => {
  const nav = [
    { path: "/about", name: "サイトについて" },
    { path: "/category", name: "カテゴリー" },
    { path: "/form", name: "お問い合わせ" },
  ];
  return (
    <header className={"flexRowAlignCenter"}>
      <nav className={"flexRowSpaceBetween"}>
        <Link to="/">こゆび</Link>
        <ul className={"flexRowCenter"}>
          {nav.map((item) => (
            <li key={item.name} className={"margin1-5"}>
              <Link to={item.path} className={"navItem"}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
