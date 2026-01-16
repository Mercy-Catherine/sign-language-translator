import React from "react";
import { Box, Typography, Divider } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#0f172a",
        color: "#e5e7eb",
        pt: 6,
        pb: 3,
        px: 2,
        mt: 8,
      }}
    >
      <Box sx={{ maxWidth: "1100px", mx: "auto" }}>
        
        {/* Top Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr 1fr" },
            gap: 4,
            mb: 4,
          }}
        >
          {/* Brand */}
          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 1, color: "#ffffff" }}
            >
              SignLang AI
            </Typography>

            <Typography
              sx={{
                fontSize: "0.95rem",
                color: "#cbd5f5",
                lineHeight: 1.6,
              }}
            >
              An AI-powered platform that converts sign language videos into
              readable text, enabling inclusive and barrier-free communication.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography sx={{ fontWeight: 600, mb: 1, color: "#ffffff" }}>
              Quick Links
            </Typography>

            <Typography sx={{ fontSize: "0.9rem", mb: 0.5 }}>
              Home
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", mb: 0.5 }}>
              Upload Video
            </Typography>
            <Typography sx={{ fontSize: "0.9rem" }}>
              About Project
            </Typography>
          </Box>

          {/* Accessibility */}
          <Box>
            <Typography sx={{ fontWeight: 600, mb: 1, color: "#ffffff" }}>
              Accessibility
            </Typography>

            <Typography sx={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
              Designed to support deaf and speech-impaired users through
              AI-driven sign language interpretation.
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ backgroundColor: "#334155", mb: 2 }} />

        {/* Bottom Section */}
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "0.85rem",
            color: "#94a3b8",
          }}
        >
          © {new Date().getFullYear()} SignLang AI. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
