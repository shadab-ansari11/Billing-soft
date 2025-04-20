import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "@mui/material";
import SunnyIcon from "@mui/icons-material/Sunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LanguageIcon from "@mui/icons-material/Language";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Grid from "@mui/material/Grid";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const [modeIcon, setModeIcon] = useState(true);

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  //light and dark mode function
  const handleMode = () => {
    setModeIcon(!modeIcon);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <AppBar
            position="static"
            sx={{ backgroundColor: "#fff", color: "black" }}
          >
            <Toolbar>
              <Grid
                size={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconButton size="large">
                  <ReceiptIcon sx={{ color: "#009e74" }} />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Billing Soft
                </Typography>
                <Link href="#" sx={{ textDecoration: "none", marginRight: 2 }}>
                  My Invoice
                </Link>
                <Link href="#" sx={{ textDecoration: "none", marginRight: 2 }}>
                  Settings
                </Link>
              </Grid>
              <Grid
                size={8}
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "end",
                  marginRight: 2,
                }}
              >
                <IconButton
                  size="large"
                  aria-label="toggle theme mode"
                  color="inherit"
                >
                  <LanguageIcon />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="toggle theme mode"
                  onClick={handleMode}
                  color="inherit"
                >
                  {modeIcon ? <SunnyIcon /> : <BedtimeIcon />}
                </IconButton>

                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </Box>
    </>
  );
};

export default Header;
