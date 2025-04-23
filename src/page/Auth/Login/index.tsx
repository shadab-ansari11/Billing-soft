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
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useForm from "./hooks/useForm";
import { useAdminLogin, ILoginRequest } from "./hooks/useLogin";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../../navigation/appRoutes";
import TextField from "../../../components/Textfield";
import palette from "../../../theme/palette";
import ReceiptIcon from "@mui/icons-material/Receipt";

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
      <div
        style={{
          backgroundColor: "#1565c0",
          height: "100vh",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "40%",
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <ReceiptIcon sx={{ color: "#fff", fontSize: "45px", mt:1}}/>
            <Typography
              variant="h3"
              sx={{ color: "#fff", textAlign: "center", fontWeight: "400" }}
            >
              BillingSoft.com
            </Typography>
            </div>
            <Typography sx={{ color: "#fff",fontWeight: "400",marginLeft: "45px" }}>
              Manage your invoices with ease.
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "#fff",
              padding: 4,
              borderRadius: 3,
              boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.2)",
              mt: 2,
              width: "40%",
            }}
          >
            {/* Rest of your Sign In form remains unchanged */}
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  width: { lg: "100%", xs: "90%" },
                }}
              >
                  <Typography
              variant="h4"
              sx={{ textAlign: "center", mb: 2, fontWeight: "400" }}
            >
              Sign In
            </Typography>
                <Box sx={{ color: palette.text.secondary }}>
                  <Box sx={{ marginBottom: "10px", color: palette.text.text7 }}>
                    <TextField
                      error={!!touched.email && !!errors.email}
                      helperText={
                        touched.email && errors.email ? errors.email : " "
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
                          touched.password && errors.password
                            ? errors.password
                            : " "
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
              // variant="contained"
              sx={{ mt: 2, borderRadius: "8px", backgroundColor: "red", color: "#fff" }}
            >
              <GoogleIcon sx={{ mr: 1, color: "#fff"}} /> Sign in with Google
            </Button>
            <Typography sx={{ mt: 2, textAlign: "center", color: "#999" }}>
              Don't have an account yet?{" "}
              <Button onClick={handleSignUp}>Sign Up</Button>
            </Typography>
          </Box>
        </div>
      </div>
    </>
  );
}
