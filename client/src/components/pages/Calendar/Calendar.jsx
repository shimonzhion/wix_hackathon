import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SideBar from "../../features/Sidebar"
function Calendar() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        <Typography variant="h5">
          Calendar
        </Typography>
      </Box>
    </Box>
  );
}

export default Calendar;
