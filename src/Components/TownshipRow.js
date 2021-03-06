import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const TownshipRow = ({ township, townshipStyle }) => {
  return (
    <TableRow style={townshipStyle} key={township.id} hover>
      <TableCell component="th" scope="row" style={{ paddingLeft: "4rem" }}>
        {township.name}
      </TableCell>
      <TableCell />
      <TableCell>{township.lastInput}</TableCell>
      <TableCell>{township.formNumbers}</TableCell>
      <TableCell>{township.voterNumbers}</TableCell>
      <TableCell>{township.update}</TableCell>
    </TableRow>
  );
};

export default TownshipRow;
