import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
import ArchiveIcon from '@material-ui/icons/Archive';

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
  darkcell: {
    backgroundColor: 'black',
    color: 'white'
  }
});


const TodoTable = ({ todoArray, name }) => {

  const classes = useStyles();
  const rowsEndRef = useRef(null);

  // TODO look for icons to add to tasks like

  const scrollToBottom = () => {
    rowsEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  //TODO change behaviour so only scrolls on new input , not when it is loaded
  useEffect(scrollToBottom, [todoArray]);

  const rows = todoArray.map(({ text }) =>
    <TableRow>
      {/* <TableCell>
        <Paper>OMG</Paper>
      </TableCell> */}
      <TableCell>
        <Typography>
        {text}
        </Typography>
        {/* <PomoCountBox number={element.pomoCount} /> */}
      </TableCell>
      {/* add on tabble cell numbers of pomos adquired by task */}
      <TableCell>0</TableCell>
      <TableCell>
        <IconButton>
          <ArchiveIcon fontSize="small" />
        </IconButton>
      </TableCell>
    </TableRow>
  );


  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {/* changed classname from darkcell to darkcello to overide , i know, i know... */}
              <TableCell  colspan="3" className={classes.darkcello}>
                <Typography>
                {name}
                </Typography>
                </TableCell>
              {/* <TableCell className={classes.darkcello}>
                <Typography>
                pomocount
                </Typography>
                </TableCell> */}
              <TableCell className={classes.darkcello}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody component={Paper} >
            {rows}
            <div ref={rowsEndRef} />
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TodoTable
