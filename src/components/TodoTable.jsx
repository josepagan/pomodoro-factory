import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });


//todo learn about the package material-table to add edits and stuff

const TodoTable = ({ todoArray }) => {
  //todo, convert list into datas
  const rows = todoArray.map(({ text }) =>
    <TableRow>
      {/* <TableCell>
        <Paper>OMG</Paper>
      </TableCell> */}
      <TableCell align='center'>
        {text}
        {/* <PomoCountBox number={element.pomoCount} /> */}
      </TableCell>
    </TableRow>
  );
  return <TableContainer>
    <Table >
    <TableBody component={Paper}>
      {rows}
    </TableBody>
    </Table>

  </TableContainer>;
};

export default TodoTable