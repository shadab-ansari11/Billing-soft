import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Google as GoogleIcon, Password } from "@mui/icons-material";
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
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../../navigation/appRoutes";
import TextField from "../../../components/Textfield";
import palette from "../../../theme/palette";
import useForm from "../SignUp/hooks/useForm";
import { ISignUpRequest } from "./hooks/useSignuUp";
const initialValues: ISignUpRequest = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
export default function SignUp() {
  const navigate = useNavigate();
  const onSubmit = () => {};
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
  const handleSignIn = () => {
    navigate(AppRoutes.LOGIN);
  };
  return (
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
          <Typography
            variant="h4"
            sx={{ color: "black", textAlign: "center", mb: 2 }}
          >
            Creat a free account
          </Typography>
          <Typography sx={{ color: "#999", textAlign: "center", mb: 2 }}>
            Gain access to more features with a billing soft account.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                width: { lg: "100%", xs: "90%" },
              }}
            >
              <Box
                sx={{
                  color: palette.text.secondary,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    marginBottom: "10px",
                    color: palette.text.text7,
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid size={6}>
                      <TextField
                        label="Frist Name"
                        placeholder="Enter your first name"
                        style={{
                          width: "100%",
                          borderRadius: "6px",
                          boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                        }}
                        value={values?.firstName}
                        error={!!touched.firstName && !!errors.firstName}
                        helperText={
                          (touched.firstName && errors && errors.firstName) ||
                          ""
                        }
                        onBlur={handleBlur("firstName")}
                        onChange={handleChange("firstName")}
                      />
                    </Grid>
                    <Grid size={6}>
                      <TextField
                        label="Last Name"
                        placeholder="Enter your last name"
                        style={{
                          width: "100%",
                          borderRadius: "6px",
                          boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                        }}
                        value={values?.lastName}
                        error={!!touched.lastName && !!errors.lastName}
                        helperText={
                          (touched.lastName && errors && errors.lastName) || ""
                        }
                        onBlur={handleBlur("lastName")}
                        onChange={handleChange("lastName")}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ marginBottom: "10px", color: palette.text.text7 }}>
                  <TextField
                    label="Email"
                    placeholder="Enter your email address"
                    style={{
                      width: "100%",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                    }}
                    value={values?.email}
                    error={!!touched.email && !!errors.email}
                    helperText={(touched.email && errors && errors.email) || ""}
                    onBlur={handleBlur("email")}
                    onChange={handleChange("email")}
                  />
                </Box>
                <Stack>
                  <Box sx={{ marginBottom: "20px" }}>
                    <TextField
                      label="Password"
                      placeholder="Enter Password"
                      style={{
                        width: "100%",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                      }}
                      value={values?.password}
                      error={!!touched.password && !!errors.password}
                      helperText={
                        (touched.password && errors && errors.password) || ""
                      }
                      onBlur={handleBlur("password")}
                      onChange={handleChange("password")}
                    />
                  </Box>
                </Stack>
              </Box>
            </Box>
            <Box>
              <Button
                fullWidth
                variant="contained"
                sx={{ backgroundColor: "#009e74", mt: 2, borderRadius: "8px" }}
                onClick={() => handleSubmit()}
              >
                Sign Up
              </Button>
            </Box>
          </form>
          <Typography sx={{ mt: 2, textAlign: "center", color: "#999" }}>
            Already have an account{" "}
            <Button onClick={handleSignIn}>Sign In</Button>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
