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
import { logout } from "../../redux/user/auth";
import { useDispatch } from "react-redux";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const [modeIcon, setModeIcon] = useState(true);
  const dispatch = useDispatch();

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
  const handlLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <AppBar
            position="static"
            sx={{ backgroundColor: "#fff", color: "black" }}
          >
            <Toolbar style={{
              padding: "0px",

            }}>
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
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton size="large">
                    <ReceiptIcon sx={{ color: "#009e74" }} />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginRight: 5 }}>
                    Billing Soft
                  </Typography>
                  <Link
                    onClick={handlLogout}
                    href="#"
                    sx={{ textDecoration: "none", marginRight: 2 }}
                  >
                    My Invoice
                  </Link>
                  <Link
                    href="#"
                    sx={{ textDecoration: "none", marginRight: 2 }}
                  >
                    Settings
                  </Link>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "end",
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
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
        </Grid>
      </Box>
    </>
  );
};

export default Header;
