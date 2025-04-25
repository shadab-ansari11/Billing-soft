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
import ReceiptIcon from "@mui/icons-material/Receipt";
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
    <Box
      sx={{
        backgroundColor: "#1565c0",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: { lg: "flex", sm: "block", xs: "blcok" },
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            display: "block",
            width: { lg: "40%", sm: "100%", xs: "100%", md: "100%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { lg: "flex-start", sm: "center", md: "center" },
              justifyItems: { lg: "flex-start", sm: "center", md: "center" },
            }}
          >
            <ReceiptIcon sx={{ color: "#fff", fontSize: "45px", mt: 1 }} />
            <Typography
              variant="h3"
              sx={{ color: "#fff", textAlign: "center", fontWeight: "400" }}
            >
              BillingSoft.com
            </Typography>
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              justifyItems: "center",
              marginRight:{lg:"150px", sm:"30px", md:"30px", xs:"30px"}
            }}
          >
            <Typography sx={{ color: "#fff", fontWeight: "400" ,justifyContent: "center",
              justifyItems: "center",}}>
              Manage your invoices with ease.
            </Typography>
          </Box>
        </Box>
        {/* <Box
          sx={{
            bgcolor: "#fff",
            padding: 2,
            borderRadius: 3,
            boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.2)",
            m: 2,
            width: "40%",
            
          }}
        > */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "#fff",
              padding: 2,
              borderRadius: 3,
              boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.2)",
              m: 2,
            }}
          >
            <form onSubmit={handleSubmit}>
              <Box
              >
                <Typography
                  variant="h4"
                  sx={{ textAlign: "center", mb: 2, fontWeight: "400" }}
                >
                  Creat a free account
                </Typography>
                <Typography sx={{ color: "#999", textAlign: "center", mb: 2 }}>
                  Gain access to more features with a billing soft account.
                </Typography>
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
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "14px",
                      }}
                    >
                      <div>
                        <TextField
                          label="First Name"
                          placeholder="Enter your first name"
                          style={{
                            borderRadius: "6px",
                            boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                          }}
                          value={values?.firstName}
                          error={!!touched.firstName && !!errors.firstName}
                          helperText={
                            touched.firstName && errors.firstName
                              ? errors.firstName
                              : " "
                          }
                          onBlur={handleBlur("firstName")}
                          onChange={handleChange("firstName")}
                        />
                      </div>
                      <div>
                        <TextField
                          label="Last Name"
                          placeholder="Enter your last name"
                          style={{
                            borderRadius: "6px",
                            boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                          }}
                          value={values?.lastName}
                          error={!!touched.lastName && !!errors.lastName}
                          helperText={
                            touched.lastName && errors.lastName
                              ? errors.lastName
                              : " "
                          }
                          onBlur={handleBlur("lastName")}
                          onChange={handleChange("lastName")}
                        />
                      </div>
                    </div>
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
                      helperText={
                        touched.email && errors.email ? errors.email : " "
                      }
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
                          touched.password && errors.password
                            ? errors.password
                            : " "
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
                  sx={{ backgroundColor: "#009e74", borderRadius: "8px" }}
                  onClick={() => handleSubmit()}
                >
                  Sign Up
                </Button>
              </Box>
            </form>
            <Typography sx={{ textAlign: "center", color: "#999" }}>
              Already have an account
              <Button onClick={handleSignIn}>Sign In</Button>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
