import React from "react";
import { Box, Button, Typography } from "@mui/material";

const MyInvoice = ({ handleButtonClick }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        margin: "0 auto",
        pt: 2,
      }}
    >
      <Box
        sx={{
          width: "70%",
          marginRight: "8px",
          marginTop: "10px",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          My Invoice
        </Typography>
      </Box>
      <Box
        sx={{
          width: "15%",
          marginTop: "10px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#009e74",
            color: "white",
            "&:hover": {
              backgroundColor: "#007a5c",
            },
          }}
          onClick={handleButtonClick}
        >
          New Invoice
        </Button>
      </Box>
    </Box>
  );
};

export default MyInvoice;
