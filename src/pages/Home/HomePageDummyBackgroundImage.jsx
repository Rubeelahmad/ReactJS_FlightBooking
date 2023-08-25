import React from 'react';
import { Box } from '@mui/material';
import { styled } from "@mui/system";

const useStyles = styled((theme) => ({
  root: {
    position: 'relative',
    width: '10vw',
    height: '10vh',
    overflow: 'hidden',
  },
}));
const HomePageDummyBackgroundImage = ({ imageUrl }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={imageUrl} alt="Background" />
    </Box>
  );
};

export default HomePageDummyBackgroundImage;
