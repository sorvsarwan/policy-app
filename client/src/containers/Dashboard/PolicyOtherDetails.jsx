import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import { TableCell, TableRow, Icon } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function PolicyOtherDetails(props) {
  const { policyOtherDetails: detail, open } = props;
  return (
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Policy Other Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Bodily Injury Liability</TableCell>
                    <TableCell>Collision</TableCell>
                    <TableCell>Comprehensive</TableCell>
                    <TableCell>Personal Injury Protection</TableCell>
                    <TableCell>Property Damage Liability</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell scope="row">
                      {detail.bodilyInjuryLiability ? 'Yes' : 'No'}
                    </TableCell>
                    <TableCell scope="row">{detail.collision ? 'Yes' : 'No'}</TableCell>
                    <TableCell scope="row">{detail.comprehensive ? 'Yes' : 'No'}</TableCell>
                    <TableCell scope="row">
                      {detail.personalInjuryProtection ? 'Yes' : 'No'}
                    </TableCell>
                    <TableCell scope="row">
                      {detail.propertyDamageLiability ? 'Yes' : 'No'}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
  );
}
