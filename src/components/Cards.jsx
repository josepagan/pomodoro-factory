import React, { useState, useEffect } from "react";
import Todo from './Todo'
import { Button, Grid, Card, Typography } from '@material-ui/core'

const Cards = ({ data }) => {
    if (!data) return null;

    const cardsArray = data.map(({ name, _id, tasks, tags }) =>
        <Grid item xs={4}>
            <Card>
                <Typography>
                    {name}
                </Typography>
                <Todo
                    id={_id}
                    name={name}
                    tasks={tasks}
                    tags = {tags} />
            </Card>
        </Grid>
    );


    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={3}
        >
            { cardsArray}


        </Grid>
    )
}

export default Cards;