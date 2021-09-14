import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttons: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(2),
  },
}));

export default function BackButton() {
  const classes = useStyles();
  let history = useHistory();
  return (
    <div className={classes.buttons}>
      <Button
        variant="contained"
        aria-label="back"
        onClick={() => history.goBack()}
      >
        Back
      </Button>
    </div>
  );
}
