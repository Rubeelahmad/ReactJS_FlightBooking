import React from "react";
import { ICONS } from "../../assets/icons";
import MainFilterCard from "../../components/Card/MainFilterCard";
import "./styles.css";
import { Button } from "@mui/material";
import HomePageDummyBackgroundImage from './HomePageDummyBackgroundImage';
import homePageDummyImage from '../../assets/icons/homePageDummyBackgroundImage.jpg'

const Home = () => {
  return (
    <div>
      <div className="bannerImage">{ICONS.homePageMainBanner}</div>
      <div className="banner-content">
        <h5 className="banner-title">Just seconds away from</h5>
        <h1 className="banner-title">A WORLD OF LUXURY</h1>
        <span>
          Lörem ipsum krorat ekosiv och sende anime då cringe. Detisk. Egonat.
          Diren den eftersom sojaren, men poligam.
        </span>
        <Button
          variant="contained"
          className="start-button"
          endIcon={ICONS.sendIconRound}
        >
          Let’s Start Now
        </Button>
      </div>
      <MainFilterCard />
        {/* Your other content */}
      {/* <HomePageDummyBackgroundImage imageUrl={homePageDummyImage} /> */}
  
    </div>
  );
};

export default Home;
