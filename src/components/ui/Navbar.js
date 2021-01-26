import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'; 
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: 10,
        color: '#0ebdfb'
    },
    menuButton: {
        '&:focus': {
            outline: 'none'
        }
    },
    title: {
        flexGrow: 1,
    },
    button: {
        '&:focus': {
            outline: 'none',
            backgroundColor: '#f44336'
        },
        '&:hover': {
            backgroundColor: '#f44336'
        },
        textTransform: 'none',
        backgroundColor: '#f44336',
        marginLeft: 10,
    }
}));

export const Navbar = () => {
    
    const classes = useStyles();
    
    const { name } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <div className={classes.root}>
            <AppBar style={{ backgroundColor: '#0ebdfb' }} elevation={0} position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Calendario - { name }
                    </Typography>

 
                        <Button
                            onClick={handleLogout}
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<ExitToAppIcon />}
                        >
                            Cerrar sesión
                        </Button> 
                </Toolbar>
            </AppBar>
        </div>
    )
}
