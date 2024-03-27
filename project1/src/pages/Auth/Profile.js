import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material';



const Profile = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="profile-table">
          <TableBody>
            <TableRow>
              <TableCell>Kullanıcı ID</TableCell>
              <TableCell>200201801</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ad</TableCell>
              <TableCell>Berat</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Soyad</TableCell>
              <TableCell>Aktaş</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>E-Posta</TableCell>
              <TableCell>berataktas2020@gmail.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Telefon</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Employee</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
};

export default Profile;