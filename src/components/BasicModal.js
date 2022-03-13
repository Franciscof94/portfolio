import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@material-ui/core';
import data from '../data/data.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '5px solid #C9C9C9',
  borderTopLeftRadius: "82px",
  borderBottomRightRadius: "82px",
  boxShadow: 24,
  p: 2.2,
};

const BasicModal = ({ open, handleClose, filterArray }) => {
  const classes = useStyles();
  console.log(data.iconHTML)
  const array = data.filter((i) => i.id === filterArray)

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
            array.map(a => (
              <div className={classes.container} key={a.title}>
                <div>
                  <h3 className={classes.title}>{a.title}</h3>
                </div>
                <div className={classes.descriptionContainer}>
                    <p className={classes.description}>
                      {a.description}
                    </p>
                </div>
                <div className={classes.info}> 
                  <div className={classes.iconsContainer}>
                    <div className={classes.icons}>
                    {a.icons.map(i => (
                      <div className={classes.iconNameContainer}>
                          <div className={classes.icon}>{i.icon}</div>
                          <div className={classes.name}>{i.name}</div>
                      </div>
                    ))}
                    </div>
                  </div>
                  <div className={classes.img}>
                    <a href={a.link} target="_blank" rel="noopener noreferrer"><img src={a.url} alt={a.title} /></a>
                  </div>
                </div>
              </div>
            ))
          }
        </Box>
      </Modal>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
    container:{
      display: "flex",
      flexDirection: "column"
    },
    img: {
      "& img":{
        height: "200px",
        margin: "0 10px",
        [theme.breakpoints.down("sm")] : {
          height: "95px"
        }
      },
    },
    icons: {
      display: "flex",
      flexDirection: "column",
      margin: "5px"
    },
    iconImgContainer: {
      display: "flex",
      justifyContent: "space-around"
    },
    icon: {
      paddingRight: "10px"
    },
    title: {
      color: "#3586ff",
      fontSize: "2.2rem",
      textShadow: "3px 3px 65px #787676f2",
      margin: "5px 0 0 15px",
      [theme.breakpoints.down("sm")] : {
        fontSize: "1.5rem"
      }
    },
    info: {
      display: "grid",
      gridTemplateColumns: "auto auto auto",
    },
    description: {
      lineHeight: '1.7',
      fontSize: '1.1rem',
      [theme.breakpoints.down("sm")] : {
        fontSize: "1rem"
      },
      marginBottom: "15px"
    },
    iconNameContainer: {
      display: "flex",
      alignItems: "center"
    },
    name: {
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#343434",
    }
}))

export default BasicModal