import React, { useState } from 'react';
import {
  Box,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

const CheckBalance = () => {

  const [loading, setLoading] = useState(false);


  return (
  <>
    <Box>
      <Typography>
        <h3>Balance</h3>
      </Typography>

      <TextField
        margin="normal"
        required
        fullWidth
        autoComplete="account-id"
        label='Account ID'
      />
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        color="success"
        loading={loading}
        startIcon={<SaveIcon />}
      >
        SAVE
      </LoadingButton>
    </Box>
  </>
  )
}

export default CheckBalance;