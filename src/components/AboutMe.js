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
import Git from './/Images/Git.png';
import MaterialUi from '../Images/material-ui.png';
import Line from './Line';


const AboutMe = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Sobre <span className={classes.me}>mí</span></h1>
      <div className={classes.container}>
        <div>
          <img src={ProfileImage} alt="ProfileImage" className={classes.img} />
          <h5 className={classes.name}>Francisco</h5>
        </div>
        <div className={classes.skillsContainer}>
          <div className={classes.pContainer}>

            <p>Comencé hace un año y medio con el desarrollo Front-end de forma autodidacta, con el tiempo fui realizando cursos, entre ellos el de Java Script y React Js en Coder House.
            Aparte de esos lenguajes, tengo <span className={classes.me}>experiencia</span> en HTML, CSS, Jquery, Material UI, Styled Componentes, Firebase y Redux.</p>

            <p>A nivel personal, busco constantemente <span className={classes.me}>mejorar</span> mis habilidades y siempre estoy al tanto de las últimas herramientas de desarrollo front-end.</p>

            <p>Además de eso, tengo la capacidad de <span className={classes.me}>adaptarme</span> a cualquier equipo de trabajo, resolver problemas y contribuir nuevas ideas. También realizo proyectos de forma independiente cumpliendo con los plazos acordados.</p>

            <p>A continuación se muestra una lista de mis habilidades actuales:</p>
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
              <img src={Git} alt='Git' />
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
      "& img": {
        height: "7vh",
        cursor: "pointer",
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