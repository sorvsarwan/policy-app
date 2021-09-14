import React from "react";
import { TableCell, TableRow, Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import PolicyOtherDetails from "./PolicyOtherDetails";

export default function PolicyTableRow(props) {
  const { row, handleTableEdit } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell scope="row">{row.id}</TableCell>
        <TableCell scope="row">{row.policyDate}</TableCell>
        <TableCell scope="row">Rs. {row.premium}</TableCell>
        <TableCell scope="row">{row.customerId}</TableCell>
        <TableCell scope="row">{row.customerGender}</TableCell>
        <TableCell scope="row">{row.customerRegion}</TableCell>
        <TableCell scope="row">{row.customerIncomeGroup}</TableCell>
        <TableCell scope="row">{row.vehicleSegment}</TableCell>
        <TableCell scope="row">{row.vehicleFuel}</TableCell>

        <TableCell align="right">
          <Button variant="contained" aria-label="edit" onClick={() => handleTableEdit(row)}>
            Edit
          </Button>
        </TableCell>
      </TableRow>
      <PolicyOtherDetails
        policyOtherDetails={row.policyOtherDetails}
        open={open}
      />
    </React.Fragment>
  );
}
