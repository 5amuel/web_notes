import React from 'react'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { ButtonGroup } from '@material-ui/core'
import { Container } from '@material-ui/core'

export default function Create() {
  return (
    <Container>
      <Typography 
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Creae a New Note
      </Typography>
      <Button 
        type="submit" 
        color="primary" 
        variant="contained"
        onClick={() => console.log('clicked')}
      
      >Submit</Button>
      {/* <Button type="submit" color="secondary" variant="contained">Submit</Button>

      <ButtonGroup color="secondary" variant="outlined">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
    </Container>
  )
}
