import React from "react";
import Layout from "../components/Layout";
import style from "../assets/styles/dashboard.module.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Dashboard() {
  return (
    <Layout>
      <div className={style["budget"]}>
        <header>
          <h4>Budget</h4>

          <select name="" id="">
            <option value="">This week</option>
          </select>
        </header>

        <div className={style["revenue__stats"]}>
          <header>
            <h4>Revenue Generated</h4>
            <h1>8.2%</h1>
          </header>

          <span>Budget - N2,500,000 .00</span>
          <span>Actual - N2,167,005. 00</span>
        </div>
        <div className={style["revenue__stats"]}>
          <header>
            <h4>Quoted</h4>
            <h1>1.6%</h1>
          </header>

          <span>Budget - N1,780,000 .00</span>
          <span>Actual - N1,805,200. 00</span>
        </div>
      </div>

      <TasksForToday />
      <BarCharts />
      <Calender />
    </Layout>
  );
}

const TasksForToday = () => {
  const task = [
    {
      task: "Purchase Printing machines",
      status: "done",
    },
    {
      task: "Fire the new Manager",
      status: "done",
    },
    {
      task: "Sign the Trade project",
      status: "done",
    },
    {
      task: "Review business plan",
      status: "done",
    },
  ];
  return (
    <div className={style["tasks"]}>
      <header>
        <h4>Tasks for today</h4>
      </header>
      <ul>
        {task.map((item) => {
          return (
            <li>
              <span>{item.task}</span>
              <span className={style[item.status]}>{item.status}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const BarCharts = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className={style["barcharts"]}>
      <header>
        <h3>Status</h3>

        <div className={style["data__key"]}>
          <span>Revenue</span>
          <span>Expenses</span>
        </div>
      </header>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

const Calender = () => {
  const CalenderData = [
    {
      day: "Monday",
      date: "14-10-2020",
      title: "Weekly catch-ups",
      location: "@ Meeting room",
      time: "01:00pm",
    },
    {
      day: "Monday",
      date: "14-10-2020",
      title: "Weekly catch-ups",
      location: "@ Meeting room",
      time: "01:00pm",
    },
  ];
  return (
    <div className={style["calender"]}>
      <header>
        <h4>Calender</h4>
      </header>
      <ul>
        {CalenderData.map((item) => {
          return (
            <li>
              <h3>{`${item.day} ${item.date}`}</h3>{" "}
              <div>
                <p>{`${item.title}`}</p>
                <p>{`${item.location}`}</p>
              </div>
              <p>{`${item.time}`}</p>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
