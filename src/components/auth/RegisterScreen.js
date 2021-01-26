import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { startRegister } from '../../actions/auth';
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
        marginTop: theme.spacing(3),
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

export const RegisterScreen = () => {

    const classes = useStyles();
    const dispatch = useDispatch()

    const [formRegisterValues, handleRegisterInputChange] = useForm({
        rName: 'Pedro',
        rEmail: 'pedro@gmail.com',
        rPassword1: '123456',
        rPassword2: '123456',
    });


    const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if ( rPassword1 !== rPassword2 ) {
            return Swal.fire({title:'Error', text: 'Las contraseñas no son iguales', icon: 'error'})
        }

        dispatch(startRegister( rEmail, rPassword1, rName))
    }

    return (
        <Container className={classes.container}  component="main" maxWidth="xs">
            <Box className={classes.box} boxshadow={1}>
                <div className={classes.paper}>

                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Registro
                    </Typography>

                    <form 
                        className={classes.form}
                        onSubmit={ handleRegister }
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="fname"
                                    name="rName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Nombre"
                                    autoFocus
                                    value={rName}
                                    onChange={ handleRegisterInputChange }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="rEmail"
                                    autoComplete="email"
                                    value={rEmail}
                                    onChange={ handleRegisterInputChange }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="rPassword1"
                                    label="Contraseña"
                                    type="password"
                                    id="password-one"
                                    autoComplete="current-password"
                                    value={rPassword1}
                                    onChange={ handleRegisterInputChange }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="rPassword2"
                                    label="Repetir contraseña"
                                    type="password"
                                    id="password-two"
                                    autoComplete="current-password"
                                    value={rPassword2}
                                    onChange={ handleRegisterInputChange }
                                />
                            </Grid>
                        </Grid>

                        <Button
                            size="large"
                            type="submit"
                            fullWidth
                            color="primary"
                            variant="contained"
                            className={classes.submit}
                        >
                            Registrarme
                        </Button>

                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to="/login">
                                    Inicia sesión
                                </Link>
                            </Grid>
                        </Grid>

                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Box>
            <Video />
        </Container>


    );
}

