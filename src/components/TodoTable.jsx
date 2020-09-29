import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Paper, Typography, IconButton, TextField, Fab } from '@material-ui/core/';
import ArchiveIcon from '@material-ui/icons/Archive';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios'

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

const TodoTable = ({ todoArray, name, _id }) => {

  const classes = useStyles();
  const rowsEndRef = useRef(null);
  const newList = name === "new list"

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
              <TableCell colspan="3" className={classes.darkcello}>
                <Typography variant="h5">
                  {name}
                </Typography>
                <Frankenstein
                  _id={_id}
                  type="TaskList"
                  todoArray={todoArray}>
                  {name}
                </Frankenstein>

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



const Frankenstein = (props) => {
  const endPoint = "http://localhost:3010/api/tasksLists/"
  const [editMode, setEditMode] = useState(false)
  const [textValue, setTextValue] = useState(props.children)
  console.log(props)
  const submitHandle = (event) => {
    console.log(textValue);
    axios.put(endPoint, {_id:props._id, newText:textValue, type:props.type}).then(console.log("ALL DONE"))
    event.preventDefault();
    setEditMode(false);
  }

  if (editMode) return (
    <form onSubmit={submitHandle}>
      <TextField defaultValue={textValue}
        variant="outlined"
        onChange={(e) => { setTextValue(e.target.value) }} />
    </form>
  )
  else return (<>
    <Typography >
      {textValue}
    </Typography>
    <EditIcon onClick={() => { setEditMode(true) }} /></>)
}


export default TodoTable