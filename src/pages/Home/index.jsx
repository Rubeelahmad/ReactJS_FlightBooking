import React from "react";
import { ICONS } from "../../assets/icons";
import MainFilterCard from "../../components/Card/MainFilterCard";
import "./styles.css";
import { Box, Button, Card, Grid } from "@mui/material";
import dummyImage from '../../assets/icons/homePageDummyBackgroundImage.jpg';

const Home = () => {
  return (
    <>
    <div  >
      <div className="bannerImage" >{ICONS.homePageMainBanner}</div>
      <div className="banner-content">
        <h4 className="banner-title-h5">Just seconds away from</h4>
        <h1 className="banner-title">A WORLD OF LUXURY</h1>
        <p className="dummy-content">
          Lörem ipsum krorat ekosiv och sende anime då cringe. Detisk. Egonat.
          Diren den eftersom sojaren, men poligam.
        </p>
        <Button
          variant="contained"
          className="start-button"
          endIcon={ICONS.sendIconRound}
        >
          Let’s Start Now
        </Button>
      </div>
    
          <MainFilterCard />

    </div>
        
        <Card className="dummy-image-content">
        <img width={'100%'} height={'100%'} overflow={'hidden'}  src={dummyImage}  alt="Background" />
        </Card>
       
        

    
  


    </>
  );
};

export default Home;
