import React from "react";
import Nav from "../components/Nav";
import Button from "../components/Button";
import style from "../assets/styles/landing.module.scss";
import budget from "../assets/icons/budget-cost-svgrepo-com.svg";
import budgetImg from "../assets/icons/picture-svgrepo-com.png";
import Trending from "../assets/icons/ios-trending-up 1.png";
import Cost from "../assets/icons/budget-svgrepo-com.png";

export default function Landing() {
  const cardData = [
    {
      type: "gold",
      title: "GOLD card",
      amt: "16,000",
    },
    {
      type: "premium",
      title: "PREMUIM card",
      amt: "20,000",
    },
  ];
  return (
    <div className={style["landing__container"]}>
      <Nav />

      <section className={style["hero__container"]}>
        <h1>Tired of shuffling between spreadsheets?</h1>
        <p>Monitor all bugdets in just one software</p>
        <Button type="filled">Get Started</Button>
      </section>
      <section>
        <Features />
      </section>
      <section
        className={`${style["section__container"]} ${style["membership"]}`}
      >
        <header className={style["section__container--header"]}>
          <h2>Membership Card</h2>
          <p>Choose one of the cards and get started</p>
        </header>

        <div className={style["membership__card"]}>
          <h1>FREE trial card</h1>
          <p>Get Free 7 day trial</p>
          <p>
            *All features are locked immidateley this card expires, to continue
            usage you must puchase a membership card of your choice
          </p>
          <p>N 0.00</p>
        </div>

        {cardData.map((item) => (
          <div className={style["membership__card"]}>
            <header>
              <h1>{item.title}</h1>
            </header>
            <ul className={style["membership__card--list"]}>
              <li className={style["list__item"]}>Budget plan</li>
              <li className={style["list__item"]}>Project monitor</li>
              <li
                className={
                  item.type !== "premium"
                    ? style["unavailable"]
                    : style["list__item"]
                }
              >
                Forecast
              </li>
              <li
                className={
                  item.type !== "premium"
                    ? style["unavailable"]
                    : style["list__item"]
                }
              >
                Calender
              </li>
              <li>
                {item.amt}/<span>month</span>
              </li>
            </ul>
          </div>
        ))}
      </section>

      <section>
        <header>
          <h1>Testmonials</h1>
        </header>
      </section>
    </div>
  );
}

const Features = () => {
  const featureData = [
    {
      icon: budget,
      title: "BUGDETING",
      description:
        "Compare budget to actual and get track of your business full time",
    },
    {
      icon: budgetImg,
      title: "DETAILED REPORT",
      description:
        "With visualised dashboard,it takes just a few clicks to see what you want.",
    },
    {
      icon: Cost,
      title: "BILLS AND EXPENSES",
      description:
        "Easily manage all sales and purchase invoice to get overview of finances.",
    },
    {
      icon: Trending,
      title: "FORECASTING",
      description:
        "Get computed prediction based on re-ocurring business activities",
    },
  ];
  return (
    <div>
      <ul className={style["feature__container"]}>
        {featureData.map((feature, index) => {
          return (
            <li key={index * 1000}>
              <img src={feature.icon} alt={feature.title} />

              <h4>{feature.title}</h4>
              <p> {feature.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
