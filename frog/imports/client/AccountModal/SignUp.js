// @flow
import React from 'react';
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Container,
  Typography
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/styles';
import {
  errorBasedOnChars,
  emailErrors,
  passwordErrors
} from '/imports/frog-utils/validationHelpers';

type FormErrorT = {
  displayName: string,
  email: string,
  password: string
};

type SignUpStateT = {
  displayName: string,
  email: string,
  password: string,
  formErrors: FormErrorT
};

type SignUpPropsT = {
  classes: Object,
  onCreateAccount: (
    email: string,
    password: string,
    displayName: string
  ) => void,
  openLoginForm: () => void
};

const styles = (theme: Object) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(2, 0, 2, 0)
  },
  loginLink: {
    cursor: 'pointer'
  }
});

class SignUp extends React.Component<SignUpPropsT, SignUpStateT> {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      formErrors: {
        displayName: '',
        email: '',
        password: ''
      }
    };
  }

  formValid = (formErrors: FormErrorT) => {
    return (
      formErrors.email === '' &&
      formErrors.password === '' &&
      formErrors.displayName === ''
    );
  };

  clearErrors = () => {
    const formErrorsCleared = {
      displayName: '',
      email: '',
      password: ''
    };
    this.setState({ formErrors: formErrorsCleared });
  };

  handleChange = (event: SyntheticInputEvent<EventTarget>, type: string) => {
    this.clearErrors();
    const value = event.target.value;

    this.setState({ [type]: value });
  };

  handleSubmit = (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    const { formErrors, email, password, displayName } = this.state;
    formErrors.displayName = errorBasedOnChars(displayName, 1, 'Display Name');
    formErrors.email = emailErrors(email);
    formErrors.password = passwordErrors(password);
    if (this.formValid(formErrors)) {
      this.props.onCreateAccount(email, password, displayName);
    } else {
      this.setState({ formErrors });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create an account with FROG
          </Typography>
          <form
            className={classes.form}
            onSubmit={e => this.handleSubmit(e)}
            noValidate
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  fullWidth
                  name="displayName"
                  error={this.state.formErrors.displayName !== ''}
                  variant="outlined"
                  required
                  helperText={this.state.formErrors.displayName}
                  id="displayName"
                  label="Display Name"
                  onChange={e => this.handleChange(e, 'displayName')}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  error={this.state.formErrors.email !== ''}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  helperText={this.state.formErrors.email}
                  onChange={e => this.handleChange(e, 'email')}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  error={this.state.formErrors.password !== ''}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  helperText={this.state.formErrors.password}
                  onChange={e => this.handleChange(e, 'password')}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>

            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  className={classes.loginLink}
                  onClick={this.props.openLoginForm}
                  variant="body2"
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(SignUp);