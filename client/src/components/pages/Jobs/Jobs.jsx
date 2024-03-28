import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
function Jobs() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        <Typography variant="h5">
          Jobs
        </Typography>
      </Box>
    </Box>
  );
}

export default Jobs;
