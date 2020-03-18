import React, { useState } from 'react'
import Meta from '../components/Meta'
import { Input } from '@material-ui/core'
import { TextField } from '@material-ui/core/'
import { Button } from '@material-ui/core'

 export default () => {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
      })
    
      const [inputs, setInputs] = useState({
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
        <main>
        <Meta />
        <form onSubmit={handleOnSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                type="name"
                onChange={handleOnChange}
                required
                value={inputs.name}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                onChange={handleOnChange}
                required
                value={inputs.email}
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <TextField
                id="message"
                label="Multiline"
                multiline
                rows="4"
                onChange={handleOnChange}
                required
                value={inputs.message}
              />
            </div>
            <Button variant="contained" color="primary" type="submit" disabled={status.submitting}>
              {!status.submitting
                ? !status.submitted
                  ? 'Submit'
                  : 'Submitted'
                : 'Submitting...'}
            </Button>
        </form>
        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && (
          <div className="success">{status.info.msg}</div>
        )}
      </main>
    )
 } 
