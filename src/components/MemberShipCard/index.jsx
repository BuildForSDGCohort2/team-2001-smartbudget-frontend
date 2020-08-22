import React from "react";

export default function MembershipCard(data) {
  return (
    <div>
      {data.map((item) => (
        <header>
          <h1>{"title"}</h1>
          {item.planType === "Free" && <p>{item.description}</p>}
          {item.planType === "Free" && <p>{item.note}</p>}
          {!item.planType !== "Free" && (
            <ul>
              <li>Budget plan</li>
              <li>Project monitor</li>
              <li>Forecast</li>
              <li>Calender</li>
            </ul>
          )}
          <span>{"amount"}</span>
        </header>
      ))}
    </div>
  );
}
