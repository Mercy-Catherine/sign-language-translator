import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", form);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 420,
          backgroundColor: "#ffffff",
          p: 4,
          borderRadius: "16px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        }}
      >
        {/* Heading */}
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 3,
          }}
        >
          Welcome back! Please sign in.
        </Typography>

        {/* Social login buttons (text only) */}
        <Button
          fullWidth
          sx={{
            mb: 1.5,
            backgroundColor: "#000",
            color: "#fff",
            py: 1.3,
            borderRadius: "30px",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#111" },
          }}
        >
          Sign in with Apple
        </Button>

        <Button
          fullWidth
          sx={{
            mb: 1.5,
            backgroundColor: "#fff",
            color: "#000",
            border: "1px solid #e5e7eb",
            py: 1.3,
            borderRadius: "30px",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#f9fafb" },
          }}
        >
          Sign in with Google
        </Button>

        <Button
          fullWidth
          sx={{
            mb: 3,
            backgroundColor: "#fff",
            color: "#1877f2",
            border: "1px solid #e5e7eb",
            py: 1.3,
            borderRadius: "30px",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#f9fafb" },
          }}
        >
          Sign in with Facebook
        </Button>

        {/* OR Divider */}
        <Divider sx={{ mb: 3 }}>OR</Divider>

        {/* Login form */}
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
            sx={{ mb: 1 }}
          />

          <Typography
            sx={{
              fontSize: "13px",
              color: "#2563eb",
              textAlign: "right",
              mb: 2,
              cursor: "pointer",
            }}
          >
            Forgot your password?
          </Typography>

          <Button
            type="submit"
            fullWidth
            sx={{
              backgroundColor: "#008080",
              color: "#fff",
              py: 1.4,
              borderRadius: "30px",
              fontWeight: 700,
              "&:hover": { backgroundColor: "#006666" },
            }}
          >
            SUBMIT
          </Button>
        </Box>

        {/* Footer */}
        <Typography
          sx={{
            mt: 3,
            fontSize: "13px",
            color: "text.secondary",
            textAlign: "center",
          }}
        >
          Need an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "#2563eb",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Sign up for free
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;

