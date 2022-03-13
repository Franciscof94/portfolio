import { makeStyles } from '@material-ui/core'
import React from 'react'

const Line = () => {
    const classes = useStyles();
  return (
    <div className={classes.line}></div>
  )
}
const useStyles = makeStyles((theme) => ({
    line: {
        height: "5px",
        backgroundColor: "#cacacb8f",
        margin: "25px auto",
        width: "80%",
        borderRadius: "7px",
        boxShadow: "0 0 15px hsl(234deg 74% 76% / 35%)",
       }
}))

export default Line