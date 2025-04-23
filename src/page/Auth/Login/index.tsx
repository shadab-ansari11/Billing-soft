import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Google as GoogleIcon } from "@mui/icons-material";
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
import Grid from "@mui/material/Grid";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import useForm from "./hooks/useForm";
import { useAdminLogin, ILoginRequest } from "./hooks/useLogin";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../../navigation/appRoutes";
import TextField from "../../../components/Textfield";
import palette from "../../../theme/palette";
import ReactCardFlip from "react-card-flip";

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

  //signup link
  const handleSignUp = () => {
    navigate(AppRoutes.SIGNUP);
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
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: 2,
        }}
      >
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              bgcolor: "#fff",
              padding: 4,
              borderRadius: 3,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "black", textAlign: "center", mb: 2 }}
            >
              Welcome Back to Billing Soft!
            </Typography>
            <Typography sx={{ color: "black", textAlign: "center" }}>
              Manage your invoices with ease.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box
            sx={{
              bgcolor: "#fff",
              padding: 4,
              borderRadius: 3,
              boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.2)",
            }}
          >
            {/* Rest of your Sign In form remains unchanged */}

            <Typography
              variant="h4"
              sx={{ color: "black", textAlign: "center", mb: 2 }}
            >
              Sign In
            </Typography>
            <Typography sx={{ color: "#999", textAlign: "center", mb: 2 }}>
              Welcome Back!
            </Typography>

            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  width: { lg: "100%", xs: "90%" },
                }}
              >
                <Box sx={{ color: palette.text.secondary }}>
                  <Box sx={{ marginBottom: "10px", color: palette.text.text7 }}>
                    <TextField
                      error={!!touched.email && !!errors.email}
                      helperText={
                        (touched.email && errors && errors.email) || ""
                      }
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
              </Box>
              <Box>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#009e74",
                    mt: 2,
                    borderRadius: "8px",
                  }}
                  onClick={() => handleSubmit()}
                >
                  {isSubmitting ? (
                    <CircularProgress color="warning" size={22} />
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </Box>
            </form>

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 2, borderRadius: "8px" }}
            >
              <GoogleIcon sx={{ mr: 1 }} /> Sign in with Google
            </Button>
            <Typography sx={{ mt: 2, textAlign: "center", color: "#999" }}>
              Don't have an account yet?{" "}
              <Button onClick={handleSignUp}>Sign Up</Button>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
