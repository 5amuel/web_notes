import React from 'react'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
// import { ButtonGroup } from '@material-ui/core'
import { Container } from '@material-ui/core'
import { AcUnitOutlined } from '@material-ui/icons'
import { Send } from '@material-ui/icons'
import { KeyboardArrowRight } from '@material-ui/icons/';
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
        // startIcon={<Send />}
        endIcon={<KeyboardArrowRight />}
        onClick={() => console.log('clicked')}
      >Submit</Button>
      <br />
      <AcUnitOutlined color="secondary" fontSize="small"/>
    </Container>
  )
}
