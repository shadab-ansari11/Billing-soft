import { Box, LinearProgress, Stack } from "@mui/material";

function Spinner() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "red",
          width: "150px",
          height: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "8px",
          marginBottom: "2rem",
          borderRadius: "8px",
        }}
      >
      </Box>
      <Box sx={{ width: "300px", color: "green" }}>
        <LinearProgress />
      </Box>
    </Stack>
  );
}

export default Spinner;
