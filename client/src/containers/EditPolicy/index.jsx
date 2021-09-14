import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";

import {
  getPolicyDetails,
  updatePolicyDetails,
} from "../../services/policyService";
import Form from "./Form";
import Alert from "../../components/Alert";
import BackButton from "../../components/BackButton";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(20),
    paddingLeft: theme.spacing(60),
    paddingRight: theme.spacing(60),
  },
}));

export default function EditPolicy() {
  const classes = useStyles();
  const { id } = useParams();
  const [editFormData, setEditFormData] = useState({});
  const [alertData, setAlertData] = useState({
    show: false,
    severity: "",
    msg: "",
  });

  useEffect(() => {
    async function fetchAPI() {
      const response = await getPolicyDetails(id);
      const details = response.data;
      if (details.status === "success") {
        setEditFormData({
          id: details.data.id,
          dateOfPurchase: details.data.date_of_purchase,
          premium: details.data.premium,
        });
      }
    }
    fetchAPI();
  }, [id]);

  const handleFormSubmit = async ({ premium }) => {
    const { id } = editFormData;
    const { data: status } = await updatePolicyDetails(id, { premium });
    let alertData = {};
    if (status.status === "success" && status.data) {
      alertData = {
        severity: "success",
        msg: "Policy have been updated successfully.",
      };
    } else {
      alertData = {
        severity: "error",
        msg: "Something went wrong.",
      };
    }
    setAlertData({ ...alertData, show: true });
  };

  return (
    <div className={classes.root}>
      <BackButton />
      {alertData.show && <Alert alertData={alertData} />}

      <Typography variant="h5" gutterBottom component="div">
        Edit Policy
      </Typography>

      {Object.keys(editFormData).length && (
        <Form editFormData={editFormData} onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}
