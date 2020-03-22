import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import { Input } from '@material-ui/core'
import { Button } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';





 export default () => {
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
            company: '',
            email: '', //
            message: ''//
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
        <main>
        <CssBaseline />
        <div className="title">
            <Typography  component="h1" align='center' variant="h4">
                Contact Me
            </Typography>
        </div>
        <form onSubmit={handleOnSubmit}>
            <div className="form">
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
            <div className="form">
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
            <div className="form">
            <FormControl fullWidth>
                <TextField
                    variant="outlined"
                    id="company"
                    type="name"
                    label="Company Name"
                    onChange={handleOnChange}
                    value={inputs.company}
                />
            </FormControl>
            </div>

            <div className="form">
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
            <div className="form">
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
            <div className="submit">
                <Button variant="contained" color="primary" type="submit" disabled={status.submitting}>
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
        <style jsx>{`
            .form {
                padding-bottom: 50px;
            }
            .title {
                padding-top: 50px;
                padding-bottom:50px;
            }
        `}</style>
      </main>
     
    )
 } 
