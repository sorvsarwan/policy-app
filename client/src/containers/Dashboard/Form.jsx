import React from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const validationSchema = yup.object({
  term: yup
    .string("Please Enter Correct Search keyword")
    .required("Please Enter Searh keyword"),
});

export default function Form(props) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      term: "",
    },
    validationSchema: validationSchema,
    onSubmit: props.onSubmit,
  });
  return (
    <form className={classes.root} name="search" onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="term"
        name="term"
        label="Search"
        value={formik.values.term}
        onChange={formik.handleChange}
        error={formik.touched.term && Boolean(formik.errors.term)}
        helperText={formik.touched.term && formik.errors.term}
      />
      <div>
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </div>
    </form>
  );
}
