import React, {useState} from 'react';
import {
  Box,
  TextField,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

const WithdrawMoney = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Box>
        <Typography>
          <h3>Withdraw Amount</h3>
        </Typography>

        <TextField
          margin="normal"
          required
          fullWidth
          autoComplete="account-id"
          label='Account ID'
        />

        <TextField
          margin="normal"
          required
          fullWidth
          autoComplete="amount"
          label='Amount'
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

export default WithdrawMoney;
