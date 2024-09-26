import * as React from "react";

import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


import { useState } from "react";

function SignUpGraduate() {


  const [graduate, setGraduate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    classOf: "",
    city: "",
    street: "",
  });
  const handleKeyPress = (event) => {
    const pattern = /[0-9]/;
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  };


  const handleSubmitGraduate = (event) => {
    event.preventDefault();
    console.log("Form submitted:", graduate);
  };
  
  const handleChangeGraduate = (event) => {
    const { name, value } = event.target;
    setGraduate({ ...graduate, [name]: value });
  };
  


  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmitGraduate}
      sx={{ mt: 1, width: "70%" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            value={graduate.firstName}
            onChange={handleChangeGraduate}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            value={graduate.lastName}
            onChange={handleChangeGraduate}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            
            id="email"
            label="Email"
            inputProps={{
              type: "email",
            }}
            name="email"
            autoComplete="email"
            value={graduate.email}
            onChange={handleChangeGraduate}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="birthdate"
            label="Birthdate"
            type="date"
            name="birthdate"
            autoComplete="birthdate"
            value={graduate.birthdate}
            onChange={handleChangeGraduate}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="phone"
            label="Phone Number"
            type="tel"
            id="phone"
            autoComplete="tel"
            inputProps={{ maxLength: 10 }}
            onKeyPress={handleKeyPress}
            value={graduate.phone}
            onChange={handleChangeGraduate}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="city"
            required
            fullWidth
            id="City"
            label="City"
            autoFocus
            value={graduate.city}
            onChange={handleChangeGraduate}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="street"
            label="Street"
            name="street"
            autoComplete="family-name"
            value={graduate.street}
            onChange={handleChangeGraduate}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth sx={{ marginTop: "5px" }}>
            <InputLabel id="city-label">ClassOf</InputLabel>
            <Select
              labelId="Class Of"
              id="class-of"
              name="classOf"
              required
              autoFocus
              sx={{
                "&:focus": {
                  backgroundColor: "transparent",
                },
              }}
              value={graduate.classOf}
              onChange={handleChangeGraduate}
            >
              <MenuItem value="65ff5e7f12ca7a62cee77722">A</MenuItem>
              <MenuItem value="6601a4935f359d13b989e8f0">B</MenuItem>
              <MenuItem value="6601a4a35f359d13b989e8f2">C</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={graduate.password}
            onChange={handleChangeGraduate}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirm-password"
            autoComplete="new-password"
            value={graduate.confirmPassword}
            onChange={handleChangeGraduate}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive inspiration, marketing promotions and updates via email."
          />
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href="./signIn" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SignUpGraduate;
