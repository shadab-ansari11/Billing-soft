import React from "react";
import Box from "@mui/material/Box";
import {
  Container,
  Typography,
  FormLabel,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@mui/material";
function Login() {
  return (
    <Container
      fixed
      sx={{
        bgcolor: "#edebe4",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "#fff",
          width: 400,
          p: 4,
          borderRadius: 2,
          boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h3" sx={{ color: "black", textAlign: "center" }}>
          Sign In
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "#999", textAlign: "center", mb: 3 }}
        >
          Welcome Back
        </Typography>

        <form>
          <FormLabel>Email</FormLabel>
          <TextField
            fullWidth
            margin="normal"
            id="email"
            label="Email"
            variant="outlined"
          />

          <FormLabel>Password</FormLabel>
          <Link href="#" sx={{color: "#999",ml:24}} underline="none">Forgot password?</Link>
          <TextField
            fullWidth
            margin="normal"
            id="password"
            label="Password"
            variant="outlined"
            type="password"
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Keep me logged in"
            sx={{ mt: 1, color:'#999' }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "#009e74", mt: 2 }}
          >
            Sign In
          </Button>
        </form>

        <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
          >
            Sign in with google
          </Button>
      </Box>
    </Container>
  );
}

export default Login;
