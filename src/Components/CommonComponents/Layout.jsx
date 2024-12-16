import React from "react";
import HeaderBase from "../Header/HeaderBase";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  return (
    <>hello
      <div className="wrapper">
        <HeaderBase />
        <main className="content">
          <div className="scrollable">
            <div class="container-fluid ">{props.children}</div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
