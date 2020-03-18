import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Container } from '@material-ui/core'
import Form from '../components/Form'

const border = props =>
  css`
    border: 5px solid black;
  `

const Box = styled.div`
  ${border};
`


export default () => {
  

  return (
     <div >
      <Form></Form>
     </div>
  )
}