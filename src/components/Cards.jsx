import React, { useState, useEffect } from "react";
import Todo from './Todo'
import { Button, Grid, Card, Typography, Paper } from '@material-ui/core'

const CardsGrid = ({ data, setTasksList }) => {
    if (!data) return null;

    const cardsArray = data.map(({ name, _id, tasks, tags }) =>
        <Grid item xs={4}>
            <Card>
                {/* <Paper>
                    <Typography>
                        {name}
                    </Typography>
                </Paper> */}
                <Todo
                    _id={_id}
                    name={name}
                    tasks={tasks}
                    tags={tags}
                    setTasksList={setTasksList} />
            </Card>
        </Grid>
    );


    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={10}
        >
            { cardsArray}


        </Grid>
    )
}

export default CardsGrid;