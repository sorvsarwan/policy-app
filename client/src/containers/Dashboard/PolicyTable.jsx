import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import TablePagination from "../../components/Table/TableFooterPagination";
import PolicyTableRow from "./PolicyTableRow";

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

export default function PolicyTable(props) {
  const { rows, count, page, handleTableEdit, handleTableChangePage } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom component="div">
        Policy Search Results
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell component="th">Policy Id</TableCell>
              <TableCell>Date of Purchase</TableCell>
              <TableCell>Premium</TableCell>
              <TableCell>Customer Id</TableCell>
              <TableCell>Customer Gender</TableCell>
              <TableCell>Customer Region</TableCell>
              <TableCell>Customer IncomeGroup</TableCell>
              <TableCell>Vehicle Segment</TableCell>
              <TableCell>Vehicle Fuel</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <PolicyTableRow
                key={row.id}
                row={row}
                handleTableEdit={handleTableEdit}
              />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          count={count}
          page={page}
          handleChangePage={handleTableChangePage}
        />
      </TableContainer>
    </React.Fragment>
  );
}
