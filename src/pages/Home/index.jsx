import React from "react";
import { ICONS } from "../../assets/icons";
import "./styles.css";
import MainFilterCard from "../../components/Card/MainFilterCard";

const Home = () => {
  return (
    <div>
      <div className="bannerImage">{ICONS.homePageMainBanner}</div>
      <MainFilterCard />
    </div>
  );
};

export default Home;
