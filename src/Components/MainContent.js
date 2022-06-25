import React from "react";
import BarChart from "./BarChart";

export default function MainContent() {
  return (
    <div className="mainContent">
      <h1>Spending-Last 7 days</h1>
      <BarChart />
      <hr />
      <div className="lowerContent">
        <p className="mediumBrown">Total this month</p>
        <ul className="lowerContentUl">
          <li className="amountThisMonth">$478.33</li>
          <ul className="align">
            <li className="percentage">+2.4%</li>
            <li className="mediumBrown">from last month</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
