import * as React from "react";

const Header = () => {
  return (
    <footer>
      <p className={"copyright"}>
        © Gatsby Blog Site {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Header;
