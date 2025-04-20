import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Container,
  Typography,
  FormLabel,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@mui/material";
import { ILogin } from "interfaces/auth";
import useForm from "./hooks/useForm";
import { useAdminLogin, ILoginRequest } from "./hooks/useLogin";
import { useNavigation } from "react-router-dom";
import AppRoutes from "../../../navigation/appRoutes";

const initialValues: ILogin = {
  email: "",
  password: "",
};

export default function Login() {
  const navigation: any = useNavigation();
  const { tryLogin } = useAdminLogin();
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
          navigation(AppRoutes)
        }, 3000);
      }
    } catch (error: any) {
      console.log("error-->",error)
      setLoading(false);
    }
    resetForm();

    // if (values.email !== "shadab@gmail.com" || values.password !== "11") {
    //   console.log("Invalid credentials");
    // } else {
    //   console.log("Login successful");
    // }
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
          bgcolor: "#fff",
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
          <FormLabel>Email</FormLabel>
          <TextField
            fullWidth
            margin="normal"
            name="email"
            placeholder="email"
            variant="outlined"
            error={!!touched.email && !!errors.email}
            helperText={touched.email && errors.email}
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormLabel>Password</FormLabel>
            <Link href="#" sx={{ color: "#999" }} underline="none">
              Forgot password?
            </Link>
          </Box>
          <TextField
            fullWidth
            margin="normal"
            name="password"
            placeholder="password"
            variant="outlined"
            type="password"
            error={!!touched.password && !!errors.password}
            helperText={touched.password && errors.password}
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Keep me logged in"
            sx={{ mt: 1, color: "#999" }}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "#009e74", mt: 2 }}
            disabled={isSubmitting}
          >
            Sign In
          </Button>
        </form>

        <Button fullWidth variant="contained" sx={{ mt: 2 }}>
          Sign in with Google
        </Button>
      </Box>
    </Container>
  );
}
