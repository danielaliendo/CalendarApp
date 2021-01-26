import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { Video } from './Video';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <a href="https://danielaliendo.github.io/CalendarApp/">
                Daniela Liendo | CalendarApp
      </a>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        textTransform: 'none',
        '&:focus': {
            outline: 'none',
        }
    },
    container: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        padding: 25,
        backgroundColor: 'white',
        borderRadius: 4
    }
}));

export const LoginScreen = () => {

    const classes = useStyles();
    const dispatch = useDispatch()

    const [formLoginValues, handleLoginInputChange] = useForm({
        lEmail: '',
        lPassword: '',
    });

    const { lEmail, lPassword } = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLogin(lEmail, lPassword) )
    }

    return (
        <Container className={classes.container} component="main" maxWidth="xs">
            <Box className={classes.box} boxShadow={1}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Iniciar sesión
                </Typography>
                    <form
                        onSubmit={handleLogin}
                        className={classes.form}
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="lEmail"
                            value={lEmail}
                            onChange={handleLoginInputChange}
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="lPassword"
                            value={lPassword}
                            onChange={handleLoginInputChange}
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            size="large"
                        >
                            Ingresar
                    </Button>

                        <Grid container >
                            <Grid item>
                                <Link to="/register">
                                    Registrate gratis
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Box>
            <Video />
        </Container>
    );
}
