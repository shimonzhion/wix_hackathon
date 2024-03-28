import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CalendarBoard from "../../features/CalendarBoard";

function Calendar() {
  return (
    <Box sx={{ display: "flex" }} className="d-flex justify-content-center">
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        <Typography variant="h5">
          <div>
            <CalendarBoard />
          </div>
        </Typography>
      </Box>
    </Box>
  );
}

export default Calendar;
