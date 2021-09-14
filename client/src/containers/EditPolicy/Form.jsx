import React from "react";
import { makeStyles, TextField, Button, Container } from "@material-ui/core";
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
  dateOfPurchase: yup
    .string("Please Enter Correct Date.")
    .required("Please Enter Correct Date."),
  premium: yup
    .number("Please Enter Correct Premium amound")
    .min(1)
    .max(1000000)
    .required("Please Enter Searh keyword"),
});

export default function Form(props) {
  const { editFormData, onSubmit } = props;
  const classes = useStyles();
  const formik = useFormik({
    initialValues: editFormData,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });
  return (
    <Container>
      <form
        className={classes.root}
        name="editPolicy"
        onSubmit={formik.handleSubmit}
      >
        <TextField
          fullWidth
          id="dateOfPurchase"
          name="dateOfPurchase"
          label="Date of Purchase"
          value={formik.values.dateOfPurchase}
          onChange={formik.handleChange}
          disabled={true}
          error={
            formik.touched.dateOfPurchase &&
            Boolean(formik.errors.dateOfPurchase)
          }
          helperText={
            formik.touched.dateOfPurchase && formik.errors.dateOfPurchase
          }
        />
        <TextField
          fullWidth
          id="premium"
          name="premium"
          label="Premium"
          value={formik.values.premium}
          onChange={formik.handleChange}
          error={formik.touched.premium && Boolean(formik.errors.premium)}
          helperText={formik.touched.premium && formik.errors.premium}
        />
        <div>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </div>
      </form>
    </Container>
  );
}
