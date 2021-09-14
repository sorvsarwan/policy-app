import React from "react";
import TablePagination from "@material-ui/core/TablePagination";

export default function TableFooterPagination(props) {
  const { count, page, handleChangePage } = props;
  return (
    <TablePagination
      component="div"
      rowsPerPageOptions={[]}
      count={count}
      rowsPerPage={10}
      page={page}
      onPageChange={handleChangePage}
    />
  );
}
