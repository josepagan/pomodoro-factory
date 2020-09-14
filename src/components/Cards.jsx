import React, { useState, useEffect } from "react";
import Todo from './Todo'
import { Button, Grid, Card } from '@material-ui/core'

// tengo que acoradrme de como evitar el map de null, quizas deba de echar un vistazo
// a el primer projecto del udacity

const Cards = ({ data }) => {
    const cardsArray = data.map(tasklist =>
    <Grid item xs={4}>
        <Card>
            <Todo id={tasklist._id} name={tasklist.name} />
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


        </Grid>
    )
}

export default Cards;