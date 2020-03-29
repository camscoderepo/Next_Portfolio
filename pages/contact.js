import React, { useState } from 'react'
import Form from '../components/Form'
import Container from '@material-ui/core/Container'
import Navbar from '../components/Layouts/Navbar'


const Contact = () => {
  return (
    <>
    <Navbar />
     <Container component="main" align="center">
      <Form></Form>
     </Container>
     </>
  )
}

export default Contact;