import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

function DashboardHome() {
  const stats = [
    { title: "Total Videos", value: 0 },
    { title: "Converted Videos", value: 0 },
    { title: "In Processing", value: 0 },
    { title: "Last Activity", value: "—" },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        Welcome back 👋
      </Typography>

      <Typography sx={{ color: "text.secondary", mb: 4 }}>
        Here’s an overview of your activity.
      </Typography>

      <Grid container spacing={3}>
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                p: 3,
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <Typography
                sx={{ color: "text.secondary", fontSize: "14px" }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{ fontWeight: 700, fontSize: "24px", mt: 1 }}
              >
                {item.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DashboardHome;
