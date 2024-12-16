import React from "react";

import { LINKS } from "../../Helper/Constants";

export default function Footer() {
  return (
    <footer className="footer_custom ">
      <div className="d-flex justify-content-between">
        <div>{new Date().getFullYear()}, Navneet Kaur</div>
        <div className="d-flex">
          {Object.entries(LINKS).map((link) => {
            return (
              <a class="text-white me-3">
                <img src={link[1].image} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
