import React from 'react'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { ButtonGroup } from '@material-ui/core'
import { Container } from '@material-ui/core'
import { AcUnitOutlined } from '@material-ui/icons'
// import { Send } from '@material-ui/icons'
import { KeyboardArrowRight } from '@material-ui/icons/';
import { makeStyles } from '@material-ui/styles'
import { TextField } from '@material-ui/core';
import { useState } from 'react'




const useStyles = makeStyles({
  field:{
    marginTop:20,
    marginBottom:20,
    display: 'block'
  }
})


export default function Create() {
  const classes = useStyles()
  const {field} = classes
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title == ''){
      setTitleError(true)
    }
    if (details == ''){
      setDetailsError(true)
    }
    if(title && details){
      console.log(title, details)
      setDetailsError(false)
      setTitleError(false)
    }

  }

  return (
    <Container>
      <Typography 
        // className={classes.title}
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField 
          onChange={(e) => setTitle(e.target.value)}
          className={field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
         />
         <TextField 
         onChange={(e) => setDetails(e.target.value)}
          className={field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
         />
         <Button 
            // className={classes.btn}
            type="submit" 
            color="secondary" 
            variant="contained"
            // startIcon={<Send />}
            endIcon={<KeyboardArrowRight />}
          >Submit</Button>
      </form>
      
      <br />
      {/* <AcUnitOutlined color="secondary" fontSize="small"/> */}
    </Container>
  )
}
