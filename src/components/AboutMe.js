import { makeStyles } from '@material-ui/core';
import React from 'react';
import ProfileImage from "../Images/My project-modified.png";
import Html from "../Images/html.png";
import Css from '../Images/css.png';
import JavaScript from '../Images/js.png';
import ReactJs from '../Images/react.png';
import Sass from '../Images/sass.png';
import Bootstrap from '../Images/bootstrap.png';
import Firebase from '../Images/firebase.png';
import Redux from '../Images/redux.png';
import MaterialUi from '../Images/material-ui.png';
import Line from './Line';


const AboutMe = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>About <span className={classes.me}>Me</span></h1>
      <div className={classes.container}>
        <div>
          <img src={ProfileImage} alt="ProfileImage" className={classes.img} />
          <h5 className={classes.name}>Francisco</h5>
        </div>
        <div className={classes.skillsContainer}>
          <div className={classes.pContainer}>
            <p>
            I started a year ago with Front-end development. I have <span className={classes.me}>experience</span> in HTML, CSS and JavaScript.
            Besides I have knowledge about React Js, Sass, Material Ui and Bootstrap.</p>

            <p>On a personal level, I constantly seek to <span className={classes.me}>improve</span> my skills and am aware of the latest front-end development tools. </p>

            <p>In addition to that, I have the ability to <span className={classes.me}>adapt</span> to any kind of equipment environment. I also have the ability to work
            independently by keeping schedule and meeting agreed deadlines. </p>

            <p>Below is a list of my current technical skills:</p>
          </div>
          <div className={classes.skills}> 
              <img src={Html} alt='Html' />
              <img src={Css} alt='Css' />
              <img src={JavaScript} alt='JavaScript' />
              <img src={ReactJs} alt='ReactJs' />
              <img src={Sass} alt='Sass' />
              <img src={Bootstrap} alt='Bootstrap' />
              <img src={MaterialUi} alt='MaterialUi' />
              <img src={Firebase} alt='Firebase' />
              <img src={Redux} alt='Redux' />
          </div>
        </div>
      </div>
      <Line />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    container: {
      display: "grid",
      gridTemplateColumns: "37% 63%",
      [theme.breakpoints.down("sm")] : {
        gridTemplateRows: "auto auto",
        gridTemplateColumns: "none"
      }
    },
    img: {
      height: "40vh",
    },
    pContainer: {
      textAlign: "initial",
      fontSize: "2rem",
      paddingRight: "6rem",
      fontFamily: "'Open Sans', sans-serif",
      color: "#202020",
      lineHeight: "1.2",
      [theme.breakpoints.down("sm")] : {
        padding: "0"
      }
    },
    me: {
      color: "#3586FF",
      margin: "0"
    },
    title: {
      fontSize: "3rem",
      color: "#202020"
    },
    name: {
      fontSize: "1.7rem",
      color: "#202020",
      margin: "9px 0"
    },
    skills: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 0.09fr)",
      gap: "10px",
      marginTop: "30px",
      cursor: "pointer",
      "& img": {
        height: "7vh",
        [theme.breakpoints.down("sm")] : {
          height: "5vh"
      },
      },
      "& img:hover":{
        transform: "scale(1.1)",
        transition: "0.6s all ease",
      },
    },
    skillsContainer: {
      margin: "0 30px"
    },
}))

export default AboutMe