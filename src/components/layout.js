import * as React from "react";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import "../style/common.scss";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className={"wrapper"}>{props.children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
