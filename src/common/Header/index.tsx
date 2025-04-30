import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Link,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import SunnyIcon from "@mui/icons-material/Sunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LanguageIcon from "@mui/icons-material/Language";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { logout } from "../../redux/user/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppRoutes from "navigation/appRoutes";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [modeIcon, setModeIcon] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);
  const handleLogout = () => {
    dispatch(logout());
    setAnchorEl(null);
  };

  const handleMode = () => setModeIcon(!modeIcon);
  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem
          component="button"
          onClick={() => navigate(AppRoutes.DASHBOARD)}
        >
          <ListItemText primary="My Invoice" />
        </ListItem>
        <ListItem component="button">
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem component="button">
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem component="button">
          <ListItemText primary="My account" />
        </ListItem>
        <ListItem component="button" onClick={handleLogout}>
          <ListItemText primary="Log out" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#fff", color: "black" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton size="large">
              <ReceiptIcon sx={{ color: "#009e74" }} />
            </IconButton>
            <Typography variant="h6" sx={{ mr: 3 }}>
              Billing Soft
            </Typography>
            {!isMobile && (
              <>
                <Link
                  href={AppRoutes.DASHBOARD}
                  sx={{ mr: 2, textDecoration: "none" }}
                >
                  My Invoice
                </Link>
                <Link href="#" sx={{ mr: 2, textDecoration: "none" }}>
                  Settings
                </Link>
              </>
            )}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit">
              <LanguageIcon />
            </IconButton>
            <IconButton onClick={handleMode} color="inherit">
              {modeIcon ? <SunnyIcon /> : <BedtimeIcon />}
            </IconButton>
            {!isMobile ? (
              <>
                <IconButton onClick={handleMenu} color="inherit">
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleLogout}>Log out</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  {drawerContent}
                </Drawer>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
