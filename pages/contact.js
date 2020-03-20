import React, { useState } from 'react'
import Form from '../components/Form'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue
    marginTop: theme.spacing(1),
    padding: '0 30px'
  }
}))


export default () => {
  const classes = useStyles();
  return (
    <>
     <Container component="main" align="center">
      <Form className={classes.form}></Form>
     </Container>
     </>
  )
}