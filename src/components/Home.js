import { makeStyles } from '@material-ui/core';
import React from 'react';
import BackgroundImage from "../Images/backgroundImage.jpg";
import Line from './Line';

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <h2 className={classes.hi}>
            hi! I'm
        </h2>
        <h1 className={classes.name}>
            Francisco
        </h1>
        <h2 className={classes.dev}>
          Web Dev.
        </h2>
        <Line />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    img: {
        width: "100%",
        objectFit: "cover",
        height: "50vh",
        opacity: "0.8",
        [theme.breakpoints.down("sm")] : {
          height: "35vh"
        },
    },
    title: {
        color: "#347ced",
        position: "absolute",
        top: "30%",
        width: "100%",
        fontSize: "3.5rem",
        fontWeight: "bold",
        [theme.breakpoints.down("sm")] : {
          top: "15%"
        },
    },
    root:{
      padding: "0 3vh"
    },
    hi: {
      fontFamily: "font-family: 'Lato', sans-serif",
      fontSize: "clamp(36px,8vw,6rem)",
      fontWeight: "bold",
      color: "#3586ff",
      maxWidth: "1080px",
      display: "flex",
      margin: "0"
    },
    name: {
      fontFamily: "font-family: 'Lato', sans-serif",
      fontSize: "clamp(36px,19vw,15rem)",
      color: "#c9c9c9",
      lineHeight: ".75",
      margin: "0",
      display: "flex"
    },
    dev: {
      fontFamily: "font-family: 'Lato', sans-serif",
      fontSize: "clamp(36px,8vw,6rem)",
      fontWeight: "bold",
      color: "#3586ff",
      maxWidth: "1080px",
      margin: "0",
      display: "flex",
      justifyContent: "end"
    }
}))

export default Home