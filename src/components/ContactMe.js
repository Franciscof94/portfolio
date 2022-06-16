import { makeStyles } from '@material-ui/core';
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaCloudDownloadAlt } from "@react-icons/all-files/fa/FaCloudDownloadAlt";
import CV from '../Images/FrnciscoFerraro.pdf'


const ContactMe = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.social}>
            <ul className={classes.ul}>
                <li><a href="https://github.com/Franciscof94">Github</a><FaGithub className={classes.icons} /></li>
                <li><a href="https://www.linkedin.com/in/franciscoferraro/">Linkedin</a><FaLinkedin className={classes.icons} /></li>
                <li><a href={CV} download='FranciscoFerraro.pdf'>Curriculum</a><FaCloudDownloadAlt className={classes.icons} /></li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  container:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  social: {
    position: "fixed",
    bottom: "26px",
    width: "5px",
    height: "5px",
    display: "flex",
    alignItems: "center",
    transform: "rotate(-90deg)",
  },
  ul: {
    padding: "0px",
    webkitTransform: "translate(-270px, 0)",
    mozTransform: "translate(-270px, 0)",
    msTransform: "translate(-270px, 0)",
    oTransform: "translate(-270px, 0)",
    transform: "translate(-270px, 0)",
    "& li": {
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
      margin: "5px",
      background: "#c9c9c9",
      width: "300px",
      textAlign: "right",
      padding: "10px",
      fontSize: "1.3rem",
      webkitBorderRadius: "0 30px 30px 0",
      mozBorderRadius: "0 30px 30px 0",
      borderRadius: "0 30px 30px 0",
      webkitTransition: "all 1s",
      mozTransition: "all 1s",
      msTransition: "all 1s",
      oTransition: "all 1s",
      transition: "all 1s",
      "& a": {
          color: "#fff",
          textDecoration: "none"
      }
    },
    "& li:hover":{
    webkitTransform: "translate(110px, 0)",
    mozTransform: "translate(110px, 0)",
    msTransform: "translate(110px, 0)",
    oTransform: "translate(110px, 0)",
    transform: "translate(110px, 0)",
    background: "#3586fffa",
    }
  },
  icons: {
    marginLeft: "16px",
    color: "#000",
    background: "#fff",
    padding: "10px",
    webkitBorderRadius: "50%",
    mozBorderRadius: "50%",
    borderRadius: "50%",
    width: "38px",
    height: "38px",
    backgroundColor: "#ffffff",
    webkitTransform: "rotate(0deg)",
    mozTransform: "rotate(0deg)",
    msTransform: "rotate(0deg)",
    oTransform: "rotate(0deg)",
    transform: "rotate(90deg)",
  }
}))

export default ContactMe