import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';

// Material UI
import { Paper, Typography, Button, Link, Divider } from '@material-ui/core';

// Assets
import logo from '../../../assets/images/restaurant.png';

// Actions
import * as actions from '../../../store/auth/actions';

// Atoms
import FormSubmitLoader from '../../../components/Atoms/FormSubmitLoader';

import styles from './styles';

import SignInForm from './form';

const SignInView = ({ signIn, loading, error }) => {
  const classes = styles();

  const onSubmit = async values => {
    console.log(values);
    await signIn(values);
  };

  return (
    <main className={classes.root}>
      <Paper elevation={1} className={classes.paper}>
        <FormSubmitLoader loading={loading} />
        <img src={logo} alt="logo" className={classes.logo} />
        <Typography variant="h6" align="center" className={classes.logoText}>
          RESTAURANT APP
        </Typography>
        <Typography variant="h6" align="center" className={classes.title}>
          INGRESA TU CUENTA
        </Typography>
        <SignInForm onSubmit={onSubmit} />
        <div className={classes.otherContainer}>
          <Divider className={classes.divider} />
          <span className={classes.otherTitle}>O</span>
          <Divider className={classes.divider} />
        </div>
        <Button
          type="button"
          variant="contained"
          color="primary"
          size="small"
          fullWidth
          className={classes.otherButton}>
          Entrar con Google
        </Button>
        <Button
          type="button"
          variant="contained"
          color="primary"
          size="small"
          fullWidth
          className={classes.otherButton}>
          Entrar con Facebook
        </Button>
        <div className={classes.register}>
          <Typography variant="subtitle2" component="span">
            ¿No tienes una cuenta?
          </Typography>
          <Link variant="subtitle2" component={RouterLink} to="/sign-up">
            Registrarse
          </Link>
        </div>
      </Paper>
    </main>
  );
};

const mapStateToProps = ({ auth: { loading, error } }) => ({
  loading,
  error
});

const mapDispatchToProps = {
  signIn: actions.signIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInView);
