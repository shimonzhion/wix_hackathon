import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import {graduateContext, coordinatorContext} from "../../contexts/user-context"

import{coordinatorRegister} from "../../services/register-service.js"
import { useState } from "react";

const defaultTheme = createTheme();

export default function SignUp() {
  const [user, setUser] = useState(null);
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



const [coordinator, setCoordinator] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  classOf: "",
  employeeNumber:""

})


const handleChangeCoordinator = (event) => {
  const { name, value } = event.target;
  setCoordinator({ ...coordinator, [name]: value });
};

const handleSubmitCoordinator = (event) => {
  event.preventDefault();
  console.log("Form submitted:", coordinator);
  if(coordinator.password === coordinator.confirmPassword){
    try{
      coordinatorRegister(coordinator)
     .then((res) => {console.log(res);})
     .catch((err) => console.log(err))
    }
    catch(err){
      console.log(err)
    }
  }
  else{
    alert("Passwords do not match")
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



  const registrationForms = (user) => {



    switch (user) {
      case null:
        return (
          <Box sx={{ textAlign:"center", my: 8 }}>
          <Box sx={{ display: "flex", my: 8 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, marginRight: 2 }}
              onClick={() => setUser("Graduate")}
            >
              Graduate
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => setUser("Coordinator")}
            >
              Coordinator
            </Button>
          </Box>
          <Link href="./signIn" variant="body2">
            Already have an account? Sign in
          </Link>
        </Box>
        
        
        );
      case "Graduate":
        return ( <Box
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
                label="Email Address"
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
          <Button
            type="submit"
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
      case "Coordinator":
        return (     <Box
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
                id="birthdate"
                label="Birthdate"
                type="date"
                name="birthdate"
                autoComplete="birthdate"
                value={coordinator.birthdate}
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
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            הרשם
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="./signIn" variant="body2">
              Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
    

        )
      default:
        return setUser(null);
    }
  };
  




  const handleKeyPress = (event) => {
    const pattern = /[0-9]/;
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.target);

  //   console.log({
  //     firstName: data.get("firstName"),
  //     lastName: data.get("lastName"),
  //     email: data.get("email"),
  //     password: data.get("password"),
  //     birthdate: data.get("birthdate"),
  //     phone: data.get("phone"),
  //     address: {
  //       street: data.get("street"),
  //       city: data.get("city"),
  //     },
  //     classOf: data.get("classOf"),
  //   });
  // };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>

            {registrationForms(user)}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

