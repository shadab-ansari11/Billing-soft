import React, { useState } from "react";
import Header from "common/Header";
import { Box, Button } from "@mui/material";

function Dashboard() {
  const [showContent, setShowContent] = useState(false); // yeh state banayi
  const handleButtonClick = () => {
    setShowContent(true); // button click par true kar denge
  };
  return (
    <Box>
      <Header />
      {!showContent && (
        <Box
          sx={{
            backgroundColor: "yellow",
            width: "100%",
            height: "40vh",
          }}
        >
          <Button onClick={handleButtonClick}>New Invoice</Button>
        </Box>
      )}
      {showContent && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              width: "70%",
              backgroundColor: "red",
              marginRight: "8px",
            }}
          >
            <h1>Dashboard</h1>
          </Box>
          <Box
            sx={{
              width: "30%",
              backgroundColor: "green",
            }}
          >
            <h1>Right</h1>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Dashboard;
