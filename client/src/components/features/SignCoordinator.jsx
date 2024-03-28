import * as React from "react";

import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { coordinatorRegister } from "../../services/register-service";

//  shimonB123!

function SignCoordinator() {
  const [coordinator, setCoordinator] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    classOf: "",
    employeeNumber: "",
  });

  const [subButton, setSubButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleKeyPress = (event) => {
    const pattern = /[0-9]/;
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleChangeCoordinator = (event) => {
    const { name, value } = event.target;
    setCoordinator({ ...coordinator, [name]: value });
  };

  const handleSubmitCoordinator = (event) => {
    event.preventDefault();
    // const {confirmPassword, ...newCoordinator} = coordinator;
    const newCoordinator = {
      firstName: coordinator.firstName,
      lastName: coordinator.lastName,
      email: coordinator.email,
      phone: coordinator.phone,
      password: coordinator.password,
      classOf: coordinator.classOf,
      employeeNumber: coordinator.employeeNumber,
    };

    if (coordinator.password === coordinator.confirmPassword) {
      // console.log(newCoordinator);
      coordinatorRegister(newCoordinator).then((res) => {
        res.message ? setErrorMessage(res.message) : console.log(res);
      });
    } else {
      setErrorMessage("Passwords do not match");
    }
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmitCoordinator}
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
            value={coordinator.firstName}
            onChange={handleChangeCoordinator}
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
            value={coordinator.lastName}
            onChange={handleChangeCoordinator}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            value={coordinator.email}
            onChange={handleChangeCoordinator}
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
            value={coordinator.phone}
            onChange={handleChangeCoordinator}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            autoComplete="given-name"
            name="employeeNumber"
            required
            fullWidth
            id="employeeNumber"
            label="Employee Number"
            autoFocus
            value={coordinator.employeeNumber}
            onChange={handleChangeCoordinator}
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
              value={coordinator.classOf}
              onChange={handleChangeCoordinator}
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
            value={coordinator.password}
            onChange={handleChangeCoordinator}
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
            value={coordinator.confirmPassword}
            onChange={handleChangeCoordinator}
          />
        </Grid>
        <span style={{ color: "red" }}>{errorMessage}</span>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive inspiration, marketing promotions and updates via email."
          />
        </Grid>
      </Grid>
      {/* { errorMessage ? <span>{error}</span> : ""} */}
      <Button
        type="submit"
        disabled={subButton}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
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

export default SignCoordinator;
