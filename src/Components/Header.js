import React from "react";

export default function Header() {
  return (
    <div className="header">
      <ul>
        <li>My balance</li>
        <li id="headerAmount">$921.48</li>
      </ul>
      <div className="logo">
        <svg
          width="72"
          height="40"
          viewBox="0 0 72 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <circle fill="#382314" cx="48" cy="24" r="24" />
            <circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23" />
          </g>
        </svg>
      </div>
    </div>
  );
}
