
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const EMI_Calculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emi, setEmi] = useState('');

  const calculateEMI = () => {
    const p = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 1200; // monthly interest rate
    const n = parseFloat(loanTenure);

    if (p > 0 && r > 0 && n > 0) {
      const emiValue = (p * r * (Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
      setEmi(emiValue.toFixed(2));
    } else {
      setEmi('');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" align="center" gutterBottom>
          EMI Calculator
        </Typography>
        <TextField
          label="Loan Amount"
          variant="outlined"
          type="number"
          fullWidth
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Interest Rate (%)"
          variant="outlined"
          type="number"
          fullWidth
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Loan Tenure (Months)"
          variant="outlined"
          type="number"
          fullWidth
          value={loanTenure}
          onChange={(e) => setLoanTenure(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" color="primary" fullWidth onClick={calculateEMI} style={{ marginTop: '20px' }}>
          Calculate EMI
        </Button>
        {emi && (
          <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
            Monthly EMI: {emi} INR
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default EMI_Calculator;
