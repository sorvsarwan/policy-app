import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function Header() {
  const classes = useStyles();
  const history = useHistory();

  const handleReportButtonClick = () => {
    history.push(`/reports/month`);
  };

  return (
    <header>
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          BCG DEMO: Policy Dashboard
          </Typography>
          <Button color="secondary" variant="contained" onClick={() => handleReportButtonClick()}>Reports</Button>
        </Toolbar>
      </AppBar>
    </div>
    </header>
  );
}
