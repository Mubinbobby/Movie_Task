import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Home = () => {
    const arr_obj =[{movieName:"Movie 1",category:"Category 1",director:"Director 1",releaseYear:2024,language:"Malayalam"},
        {movieName:"Movie 2",category:"Category 2",director:"Director 2",releaseYear:2024,language:"Japanees"},
        {movieName:"Movie 3",category:"Category 3",director:"Director 3",releaseYear:2023,language:"English"},
        {movieName:"Movie 4",category:"Category 4",director:"Director 4",releaseYear:2024,language:"Hindi"},
        {movieName:"Movie 5",category:"Category 5",director:"Director 5",releaseYear:2023,language:"Arab"}
    ]
  return (
   
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow class="heading">
          <TableCell align="center">MovieName</TableCell>
          <TableCell align="center">Category</TableCell>
          <TableCell align="center">Director</TableCell>
          <TableCell align="center">ReleaseYear</TableCell>
          <TableCell align="center">Language</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {arr_obj.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center" component="th" scope="row">
              {row.movieName}</TableCell>
            <TableCell align="center">{row.category}</TableCell>
            <TableCell align="center">{row.director}</TableCell>
            <TableCell align="center">{row.releaseYear}</TableCell>
            <TableCell align="center">{row.language}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Home
