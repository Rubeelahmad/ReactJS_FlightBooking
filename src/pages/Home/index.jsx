import React from "react";
import { ICONS } from "../../assets/icons";
import MainFilterCard from "../../components/Card/MainFilterCard";
import "./styles.css";

const Home = () => {
  return (
    <div>
      <div className="bannerImage">{ICONS.homePageMainBanner}</div>
      <MainFilterCard />
    </div>
  );
};

export default Home;
