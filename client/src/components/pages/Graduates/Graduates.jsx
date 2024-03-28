import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
function Graduates() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        <Typography variant="h5">
          Graduates
          <h1 className="text-2xl font-bold underline">Hello world!</h1>
        </Typography>
      </Box>
    </Box>
  );
}

export default Graduates;
