
import * as React from "react";

import Button from "@mui/material/Button";

import Link from "@mui/material/Link";

import Box from "@mui/material/Box";

function SignUpToggle(props) {
    
  return (
    <Box sx={{ textAlign:"center", my: 8 }}>
          <Box sx={{ display: "flex", my: 8 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, marginRight: 2 }}
              onClick={() => props.setUser("Graduate")}
            >
              Graduate
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => props.setUser("Coordinator")}
            >
              Coordinator
            </Button>
          </Box>
          <Link href="./signIn" variant="body2">
            Already have an account? Sign in
          </Link>
        </Box>
  )
}

export default SignUpToggle