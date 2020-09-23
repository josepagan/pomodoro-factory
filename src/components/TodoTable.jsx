import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


//TODO (facepalm) it looks like datagrid was a simplified version of this.
// Consider to switch to datagrid to simplify the code
//https://material-ui.com/components/data-grid/



//this is material-UI JS in CSS solution
const useStyles = makeStyles({
  root: {
    width: '100%'    
  },
  container: {
    // forces scrollable 
    maxHeight: 440,
  },
  darkcell:{
    backgroundColor: 'black',
    color: 'white'
  }
});


const TodoTable = ({ todoArray }) => {

  const classes = useStyles();

  // TODO look for icons to add to tasks like

  const rows = todoArray.map(({ text }) =>
    <TableRow>
      {/* <TableCell>
        <Paper>OMG</Paper>
      </TableCell> */}
      <TableCell align='center'>
        {text}
        {/* <PomoCountBox number={element.pomoCount} /> */}
      </TableCell>
      {/* add on tabble cell numbers of pomos adquired by task */}
      <TableCell>0</TableCell>
      <TableCell>Archive</TableCell>
    </TableRow>
  );


  return (
    <Paper className={classes.root}>

    <TableContainer className={classes.container}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell className={classes.darkcell}>Tasks:</TableCell>
            <TableCell className={classes.darkcell}> pomocount</TableCell>
            <TableCell className={classes.darkcell}>Fat&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody component={Paper} >
          {rows}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
  );
};

export default TodoTable
