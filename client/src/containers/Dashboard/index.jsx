import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { TABLE_PAGE_SIZE } from "../../config/config";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import Form from "./Form";
import PolicyTable from "./PolicyTable";
import { fetchPolicies } from "../../services/policyService";


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(20),
    paddingRight: theme.spacing(20),
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Dashboard() {
  const history = useHistory();
  const classes = useStyles();
  const [policySearchResults, setPolicySearchResults] = useState([]);
  const [policyCount, setPolicyCount] = useState(0);
  const [page, setPage] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchDone, setSearchDone] = React.useState(false);

  const fetchPolicyList = async (searchOptions) => {
    searchOptions = {
      ...searchOptions,
      pageSize: +TABLE_PAGE_SIZE,
    };

    let policies = await fetchPolicies(searchOptions);
    console.log('policiy', policies);
    setPolicySearchResults(policies.rows);
    setPolicyCount(policies.count);
  };

  const handleFormSubmit = async ({ term }) => {
    let searchOptions = {
      term,
      pageNumber: 0,
    };
    await fetchPolicyList(searchOptions);
    setSearchTerm(term);
    setPage(0);
    setSearchDone(true);
  };

  const handleTableEdit = (data) => {
    history.push(`/edit-policy/${data.id}`);
  };

  const handleTableChangePage = async (_, newPage) => {
    let searchOptions = {
      term: searchTerm,
      pageNumber: newPage,
    };
    await fetchPolicyList(searchOptions);
    setPage(newPage);
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>Search Policy</h1>
      <Form onSubmit={handleFormSubmit} />
      {policyCount === 0 &&
        searchDone && (
          <Typography variant="h5" gutterBottom component="div">
            No Result Found.
          </Typography>
        )}
      {policyCount > 0 && (
        <PolicyTable
          rows={policySearchResults}
          count={policyCount}
          page={page}
          handleTableEdit={handleTableEdit}
          handleTableChangePage={handleTableChangePage}
        />
      )}
    </div>
  );
}
