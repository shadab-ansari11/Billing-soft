import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Container,
  Typography,
  FormLabel,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Stack,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useForm from "./hooks/useForm";
import { useAdminLogin, ILoginRequest } from "./hooks/useLogin";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../../navigation/appRoutes";
import TextField from "../../../components/Textfield";
import palette from "../../../theme/palette";

const initialValues: ILoginRequest = {
  email: "",
  password: "",
};

export default function Login() {
  const navigate = useNavigate();
  const { tryLogin } = useAdminLogin();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = React.useState(false);
  const togglePasswordView = () => setShow((s) => !s);

  const onSubmit = async (values: ILoginRequest) => {
    setLoading(true);
    try {
      const res = await tryLogin(values);
      if (res) {
        setTimeout(() => {
          setLoading(false);
          navigate(AppRoutes.DASHBOARD);
        }, 3000);
      }
    } catch (error: any) {
      console.log("error-->", error);
      setLoading(false);
    }
    resetForm();
  };
  const formik = useForm(onSubmit, initialValues);
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    isSubmitting,
    resetForm,
  } = formik;
  const handlePasswordToggle = () => setShowPassword((show) => !show);

  return (
    <Container
      fixed
      sx={{
        bgcolor: "#fff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "#ccc",
          width: 400,
          p: 4,
          borderRadius: 5,
          boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.2)",
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

        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              maxWidth: "400px",
              width: { lg: "100%", xs: "90%" },
            }}
          >
            <Box sx={{ color: palette.text.secondary }}>
              <Box sx={{ marginBottom: "10px", color: palette.text.text7 }}>
                <TextField
                  error={!!touched.email && !!errors.email}
                  helperText={(touched.email && errors && errors.email) || ""}
                  label="Email"
                  placeholder="Enter your email address"
                  style={{
                    width: "100%",
                    borderRadius: "6px",
                    boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                  }}
                  value={values.email}
                  onBlur={handleBlur("email")}
                  onChange={handleChange("email")}
                />
              </Box>
              <Stack>
               
                <Box sx={{ marginBottom: "20px" }}>
                  <TextField
                    error={!!touched.password && !!errors.password}
                    helperText={
                      (touched.password && errors && errors.password) || ""
                    }
                    iconEnd={
                      <IconButton onClick={handlePasswordToggle}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    }
                    label="Password"
                    placeholder="Enter Password"
                    style={{
                      width: "100%",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                    }}
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    onBlur={handleBlur("password")}
                    onChange={handleChange("password")}
                  />
                </Box>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Link href="#" sx={{ color: "#999" }} underline="none">
                    Forgot password?
                  </Link>
                </Box>
              </Stack>
            </Box>

            <Box
              sx={{
                width: "100%",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#009e74",
                  color: palette.common.white,
                  borderRadius: "8px",
                  height: "42px",
                  width: "100%",
                  fontWeight: 500,
                  fontFamily: "Roboto",
                  fontSize: { xs: "1.2rem", md: "1.6rem" },
                }}
                variant="contained"
                onClick={() => handleSubmit()}
              >
                {isSubmitting ? (
                  <CircularProgress color="warning" size={12} />
                ) : (
                  "Sign In"
                )}
              </Button>
            </Box>
          </Box>
        </form>

        <Button fullWidth variant="contained" sx={{ mt: 2 }}>
          Sign in with Google
        </Button>
      </Box>
    </Container>
  );
}
