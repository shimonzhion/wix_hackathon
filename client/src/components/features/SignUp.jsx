import * as React from "react";
import Avatar from "@mui/material/Avatar";

import CssBaseline from "@mui/material/CssBaseline";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import SignUpToggle from "./SignUpToggle.jsx";
import SignUpGraduate from "./SignUpGraduate.jsx";
import SignUpCoordinator from "./SignCoordinator.jsx";

import { useState } from "react";

const defaultTheme = createTheme();

export default function SignUp() {
  const [user, setUser] = useState(null);

  const registrationForms = (user) => {
    switch (user) {
      case null:
        return <SignUpToggle setUser={setUser} />;
      case "Graduate":
        return <SignUpGraduate />;
      case "Coordinator":
        return <SignUpCoordinator />;
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
