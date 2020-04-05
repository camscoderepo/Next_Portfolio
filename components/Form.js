import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import { Input } from '@material-ui/core'
import { Button } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles ((theme) => ({
  root: {
    paddingTop: theme.spacing(75)
  },
  submit: {
    margin: theme.spacing(1,0,8),
    textColor: 'white'
  },
  form: {
    paddingBottom: theme.spacing(6),
    
  },
  title: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  },
  color: {
    backgroundColor: '#1476f2',
    
  }
}))


 export default () => {
   const classes = useStyles();
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
      })
    
      const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        message: ''
      })
    
      const handleResponse = (status, msg) => {
        if (status === 200) {
          setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: msg }
          })
          setInputs({
            firstName: '',
            lastName: '',
            email: '', 
            message: ''
          })
        } else {
          setStatus({
            info: { error: true, msg: msg }
          })
        }
      }
    
      const handleOnChange = e => {
        e.persist()
        setInputs(prev => ({
          ...prev,
          [e.target.id]: e.target.value
        }))
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        })
      }
    
      const handleOnSubmit = async e => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        const res = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputs)
        })
        const text = await res.text()
        handleResponse(res.status, text)
      }
      return (
        
        <Container component="main" maxWidth="xs" className={classes.root}>
        <CssBaseline />
        <div className={classes.title}>
            <Typography  component="h1" align='center' variant="h4">
                Contact Me
            </Typography>
        </div>
        <form onSubmit={handleOnSubmit}>
            <div className={classes.form}>
            <FormControl fullWidth>
                <TextField
                    variant="outlined"
                    id="firstName"
                    type="name"
                    label="First Name"
                    onChange={handleOnChange}
                    required
                    value={inputs.firstName}
                />
            </FormControl>
            </div>
            <div className={classes.form}>
            <FormControl fullWidth>
                <TextField
                    variant="outlined"
                    id="lastName"
                    type="name"
                    label="Last Name"
                    onChange={handleOnChange}
                    required
                    value={inputs.lastName}
                />
            </FormControl>
            </div>
            <div className={classes.form}>
            <FormControl fullWidth>
                <TextField
                    variant="outlined"
                    id="email"
                    type="email"
                    label="Email"
                    onChange={handleOnChange}
                    required
                    value={inputs.email}
                />
            </FormControl>
            </div>
            <div className={classes.form}>
            <FormControl fullWidth>
                <TextField
                    variant="outlined"
                    id="message"
                    label="Message"
                    multiline
                    rows="4"
                    onChange={handleOnChange}
                    required
                    value={inputs.message}
                />
            </FormControl>
            </div>
            <div className={classes.submit}>
                <Button variant="contained" fullWidth className={classes.color}  type="submit" disabled={status.submitting}>
                {!status.submitting
                    ? !status.submitted
                    ? 'Submit'
                    : 'Submitted'
                    : 'Submitting...'}
                </Button>
            </div>
        </form>
        
        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && (
          <div className="success">{status.info.msg}</div>
        )}
      </Container>
      
    )
 } 
