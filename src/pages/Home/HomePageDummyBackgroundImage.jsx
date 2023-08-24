import React from 'react';
import { Box } from '@mui/material';
import { styled } from "@mui/system";


const useStyles = styled((theme) => ({
  root: {
    position: 'relative',
    width: '80vw',
    height: '80vh',
    overflow: 'hidden',
    '& img': {
      position: 'absolute',
      width: '80%',
      height: '80%',
      objectFit: 'cover',
    },
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
