import React from 'react'
import Router  from '../../Router'
import SideBar from "../../components/features/Sidebar"
import Box from "@mui/material/Box";
function Template() {
  return (
    <Box sx={{ display: "flex" }}>
    <SideBar />
<Router />
  </Box>
  )

}

export default Template