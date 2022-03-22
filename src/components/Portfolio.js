import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import { useState } from 'react';
import BasicModal from './BasicModal';
import Line from './Line';
import data from '../data/data'

const Portfolio = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const[filterArray, setFilterArray] = useState()

  


  return (
    <div>
      <h1 className={classes.title}>Portafolio</h1>
      <h3 className={classes.projects}>Mis <span className={classes.span}>proyectos</span></h3>
      <div className={classes.container}>

        {
          data.map((img, i) => (
            <Card sx={{ maxWidth: 155 }} key={img.alt} className={classes.card}> 
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className={classes.cardMedia}
                    image={img.url}
                    alt={img.alt}
                    onClick={() => {
                      handleOpen();
                      setFilterArray(i);
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className={classes.name}>
                      {img.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
          ))
          }
        </div>
        <BasicModal open={open} 
                    handleClose={handleClose}
                    filterArray={filterArray}
        />
        <Line />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap"
  },
  card: {
    width: "38vh",
    margin: "7px",
    [theme.breakpoints.down("sm")] : {
      width: "20vh"
    },
  },
  
  cardMedia: {
    height: "18vh"
  },
  skills: {
    fontSize: "1.2rem"
  },
  name: {
    fontSize: "1rem",
    color: "#202020"
  },
  title: {
    fontSize: "3rem",
    color: "#202020"
  },
  projects: {
    fontSize: "2rem",
    color: "#202020"
  },
  span: {
    color: "#3586FF"
  }
}))

export default Portfolio