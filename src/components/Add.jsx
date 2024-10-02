import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import createTypography from '@mui/material/styles/createTypography';

const Add = () => {
  const [movie, setMovie]=useState({
      movieName:'',
      category:'',
      director:'',
      year:'',
      language:''
  })

  let fetchValue=(e)=>{
    setMovie({...movie,[e.target.name]:e.target.value})
  }

  let sendData=()=>{
    alert("New Movie Added")
    console.log(movie)
  }

  return (
    
    <Box 
    component="form"
    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >
    
    <TextField 
    id="outlined-required" 
    label="Movie Name" 
    variant="outlined" 
    name='movieName'
    value={movie.movieName}
    onChange={fetchValue}
    /><br />

    <TextField 
    id="outlined-required" 
    label="Category" 
    variant="outlined"
    name='category' 
    value={movie.category}
    onChange={fetchValue}
    /><br />

    <TextField 
    id="outlined-required" 
    label="Director" 
    variant="outlined"
    name='director' 
    value={movie.director}
    onChange={fetchValue}
    /><br />

    <TextField 
    id="outlined-required" 
    label="Release Year" 
    variant="outlined" 
    name='year'
    value={movie.year}
    onChange={fetchValue}
    /><br />

    <TextField 
    id="outlined-required" 
    label="Language" 
    variant="outlined" 
    name='language'
    value={movie.language}
    onChange={fetchValue}
    /><br />

    <Button variant="contained" onClick={sendData}>Submit</Button>
    
  </Box>
  )
}

export default Add