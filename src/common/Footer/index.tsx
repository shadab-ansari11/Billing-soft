import React from "react";
import {
  Box,
  Typography,
  Link,
  AppBar,
  Toolbar,
  Container,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const linkData = ["Invoice Guide", "Help", "Release Notes", "Developer API"];

  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#fff", color: "black"}}
      >
        <Toolbar sx={{ padding: "0px" }}>
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" },
                py: 2,
              }}
            >
              {/* Resources Section */}
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Resources
                </Typography>
                <Box>
                  {linkData.map((item, index) => (
                    <Link
                      key={index}
                      href="#"
                      sx={{
                        textDecoration: "none",
                        mb: 1,
                        color: "inherit",
                        display: "block",
                        "&:hover": {
                          color: "green",
                        },
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </Box>
              </Box>

              {/* Social Media Section */}
              <Box
                sx={{
                  textAlign: { xs: "center", md: "right" },
                  mt: { xs: 2, md: 0 },
                }}
              >
                <Typography sx={{ mb: 1 }}>
                  © 2025 BillingSoft.com
                </Typography>
                <IconButton
                  href="#"
                  target="_blank"
                  aria-label="GitHub"
                  sx={{ color: "black", mr: 1 }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href="#"
                  target="_blank"
                  aria-label="LinkedIn"
                  sx={{ color: "black" }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
