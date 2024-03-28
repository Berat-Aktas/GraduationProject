import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material';
import { fetchProfileData } from '../../api/api.js';


const Profile = () => {

  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    // Veri çekme işlemi
    fetchProfileData()
      .then(response => {
        setProfileData(response.data); // API'den gelen veriyi state'e kaydet
      })
      .catch(error => {
        console.error("Veri çekme işlemi sırasında bir hata oluştu", error);
      });
  }, []); // Bağımlılık dizisi boş olduğu için bu efekt bileşen her yüklendiğinde bir kere çalışır
  
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="profile-table">
          <TableBody>
            {profileData.map((e, i) => {
              <TableRow key={i}>
                <TableCell>User ID</TableCell>
                <TableCell>{e.userID}</TableCell>
                <TableCell>Identity Number</TableCell>
                <TableCell>{e.IdentityNumber}</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>{e.FirstName}</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>{e.LastName}</TableCell>
                <TableCell>Date of Birth</TableCell>
                <TableCell>{e.BirthDate}</TableCell>
                <TableCell>E-Mail</TableCell>
                <TableCell>{e.PhoneNumber}</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>{e.Email}</TableCell>
                <TableCell>Employee</TableCell>
                <TableCell>{e.Employee}</TableCell>
              </TableRow>
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
};

export default Profile;