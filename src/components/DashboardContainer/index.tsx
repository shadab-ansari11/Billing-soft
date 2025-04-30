import { Box, CircularProgress, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Footer from "common/Footer";
import Header from "common/Header";

const DashboardLayoutRoot: any = styled("div")(() => {
  return {
    maxWidth: "100%",
    paddingTop: 5,
  };
});

function DashboardLayout(props: any) {
  const { children, isLoading } = props;

  return (
    <div>
      <Header />
      <DashboardLayoutRoot>
        {isLoading ? (
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <CircularProgress color="info" size={20} />
            </Box>
          </Container>
        ) : (
          <Box
            component="main"
            sx={{
            //   px: { xs: 1.5, sm: 3, md: "1.6rem", lg: "4.5rem", midlg: "80px" },
              width: "100%",
              margin: "0 auto",
              flexGrow: 1,
            //   paddingTop: { xs: "2rem", md: "3.8rem" },
            }}
          >
            {children}
          </Box>
        )}
      </DashboardLayoutRoot>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
