import React from "react";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));


export default function AlertBox(props) {
  const classes = useStyles();
  const { severity, msg } = props.alertData;
  console.log('jskljfls', props.alertData)
  return (
    <div className={classes.root}>
      <Alert severity={severity}>
        {msg}
      </Alert>
    </div>
  );
}
