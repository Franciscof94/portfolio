import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Line from "./Line";
import data from "../data/data";

const Portfolio = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.title}>Portafolio</h1>
      <h3 className={classes.projects}>
        Mis <span className={classes.span}>proyectos</span>
      </h3>
      <div className={classes.container}>
        {data.map((img, i) => (
          <Card className={classes.root}>
            <CardActionArea>
            <a href={img.link} target="_blank" rel="noopener noreferrer" className={classes.a}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={img.url}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.projectTitle}>
                  {img.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className="description">
                  {img.description}
                </Typography>
              </CardContent>
              </a>
            </CardActionArea>
          </Card>
        ))}
      </div>

      <Line />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  card: {
    width: "38vh",
    margin: "7px",
    [theme.breakpoints.down("sm")]: {
      width: "20vh",
    },
  },
  a: {
    textDecoration: "none"
  },
  cardMedia: {
    height: "18vh",
  },
  skills: {
    fontSize: "1.2rem",
  },
  name: {
    fontSize: "1rem",
    color: "#202020",
  },
  title: {
    fontSize: "3rem",
    color: "#202020",
  },
  projects: {
    fontSize: "2rem",
    color: "#202020",
  },
  span: {
    color: "#3586FF",
  },
  root: {
    maxWidth: 380,
    margin: "15px"
  },
  projectTitle: {
    color: "#202020",
    fontWeight: "bold"
  }
}));

export default Portfolio;
