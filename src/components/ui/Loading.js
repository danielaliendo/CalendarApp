import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    circle: {
        color: '#17c2ff'
    }
}));

export const Loading = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p>Cargando...</p>
            <CircularProgress
            className={classes.circle}
            disableShrink
            />
        </div>
    )
}
