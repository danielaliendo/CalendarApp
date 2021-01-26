import React from 'react';
import { useDispatch } from 'react-redux';
import {  eventStartDelete } from '../../actions/events';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        top: '76px',
        left: '130px',
        width: '140px',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            top: '76px',
        },
        [theme.breakpoints.down('sm')]: {
            top: '68px',
        },
    },
    button: {
        '&:focus': {
            outline: 'none',
            backgroundColor: '#f44336',
        },
        '&:hover': {
            backgroundColor: '#f44336',
        },
        backgroundColor: '#f44336',
        textTransform: 'none',
        color: 'white'
    }
}));

export const DeleteEventFab = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(eventStartDelete())
    }

    return (
        <div className={classes.root}>
            <Button
                onClick={handleDelete}
                size="small"
                variant="contained"
                className={classes.button}
                startIcon={<DeleteIcon />}
            >
                Borrar
        </Button>
        </div>
    )
}
