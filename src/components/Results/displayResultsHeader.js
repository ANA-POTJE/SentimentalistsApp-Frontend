import React from 'react';
import  Grid  from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
mainHeading : {
    color: "purple",
    textShadow: "3px 3px 3px",
}

})


function DisplayResultsHeader(){
const classes = useStyles();
    
    return (
        <div>
            <Grid container fixed style={{border: "3px solid red"}}
            justify="flex-start"
            direction="row"
            >
            <h1 className={classes.mainHeading}>The Sentimenalists</h1>
            <h3>Analysing Sentiment Since 2020</h3>
            </Grid>
            </div>
    )
}


export default DisplayResultsHeader;