import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import MyInvoice from "./Component/MyInvoice";
import DashboardLayout from "../../../components/DashboardContainer";
function Dashboard() {
  const [showContent, setShowContent] = useState(false); // yeh state banayi
  const handleButtonClick = () => {
    setShowContent(true); // button click par true kar denge
  };
  return (
    <DashboardLayout>
      {!showContent && <MyInvoice handleButtonClick={handleButtonClick} />}
      {showContent && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "90%",
            margin: "20px auto",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: "70%",
              backgroundColor: "red",
            }}
          >
            <Typography variant="h4" color="white">
              Dashboard
            </Typography>
          </Box>
          <Box
            sx={{
              width: "30%",
              backgroundColor: "green",
            }}
          >
            <Typography variant="h4" color="white">
              Right
            </Typography>
          </Box>
        </Box>
      )}
    </DashboardLayout>
  );
}

export default Dashboard;
