import React from "react";
import Nav from "../components/Nav";
import Button from "../components/Button";
import style from "../assets/styles/landing.module.scss";
import budget from "../assets/icons/budget-cost-svgrepo-com.svg";
import budgetImg from "../assets/icons/picture-svgrepo-com.png";
import Trending from "../assets/icons/ios-trending-up 1.png";
import Cost from "../assets/icons/budget-svgrepo-com.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Avatar from "../assets/image/download 5.png";
import Footer from "../components/Footer";

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

        <div className={`${style["free"]} ${style["membership__card"]}`}>
          <h1>FREE trial card</h1>
          <p>Get Free 7 day trial</p>
          <p>
            *All features are locked immidateley this card expires, to continue
            usage you must puchase a membership card of your choice
          </p>
          <p>N 0.00</p>
        </div>

        {cardData.map((item) => (
          <div className={`${style["membership__card"]}`}>
            <header className={style[item.type]}>
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
            </ul>
            <p className={style[item.type]}>
              {item.amt}/<span>month</span>
            </p>
          </div>
        ))}
      </section>

      <section className={style["Testimonials"]} style={{ width: "100%" }}>
        <header>
          <h1>Testimonials</h1>
        </header>
        <Carousel />
      </section>

      <section
        className={style["download__budgety"]}
        style={{ width: "100%" }}
      ></section>

      <section className={style["download__budgety"]} style={{ width: "100%" }}>
        <Footer />
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

const Carousel = () => {
  const carouselData = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditaterepudiandae corrupti numquam tenetur! Accusantium nisi magnam velrerum veritatis harum impedit numquam obcaecati libero",
      username: "sundar pichai",
      image: Avatar,
      title: "CEO Demin CO",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditaterepudiandae corrupti numquam tenetur! Accusantium nisi magnam velrerum veritatis harum impedit numquam obcaecati libero",
      username: "sundar pichai",
      image: Avatar,
      title: "CEO Demin CO",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditaterepudiandae corrupti numquam tenetur! Accusantium nisi magnam velrerum veritatis harum impedit numquam obcaecati libero",
      username: "sundar pichai",
      image: Avatar,
      title: "CEO Demin CO",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {carouselData.map((item) => {
        return (
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate repudiandae corrupti numquam tenetur! Accusantium nisi
              magnam vel rerum veritatis harum impedit numquam obcaecati libero
            </p>

            <div>
              <img src={item.image} alt="" />
            </div>
            <span>{item.username}</span>
            <span>{item.title}</span>
          </div>
        );
      })}
    </Slider>
  );
};
