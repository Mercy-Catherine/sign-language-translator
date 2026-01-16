// import React from "react";
// import { Box, Typography, Avatar, Button } from "@mui/material";

// function Profile() {
//   return (
//     <Box sx={{ p: 4, maxWidth: 600 }}>
//       <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
//         My Profile
//       </Typography>

//       <Box
//         sx={{
//           backgroundColor: "#ffffff",
//           borderRadius: "16px",
//           p: 4,
//           boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
//         }}
//       >
//         <Avatar
//           sx={{
//             width: 80,
//             height: 80,
//             mb: 2,
//             backgroundColor: "#2563eb",
//             fontSize: "1.8rem",
//           }}
//         >
//           U
//         </Avatar>

//         <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
//           User Name
//         </Typography>

//         <Typography sx={{ color: "text.secondary", mb: 2 }}>
//           user@email.com
//         </Typography>

//         <Typography sx={{ mb: 1 }}>
//           Total Videos: <b>0</b>
//         </Typography>

//         <Typography sx={{ mb: 3 }}>
//           Joined: <b>2025</b>
//         </Typography>

//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: "#2563eb",
//             fontWeight: 600,
//             borderRadius: "10px",
//           }}
//         >
//           Edit Profile
//         </Button>
//       </Box>
//     </Box>
//   );
// }

// export default Profile;

import React from "react";
import { Box, Typography, Avatar, Button, Paper } from "@mui/material";

function Profile() {
  const user = {
    name: "User Name",
    email: "user@example.com",
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
        Profile
      </Typography>

      <Paper
        sx={{
          p: 5,
          maxWidth: 500,
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        {/* Avatar */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              fontSize: "32px",
              fontWeight: 700,
              backgroundColor: "#2563eb",
            }}
          >
            {user.name.charAt(0)}
          </Avatar>
        </Box>

        {/* User Info */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
            {user.name}
          </Typography>

          <Typography sx={{ color: "text.secondary", fontSize: "14px" }}>
            {user.email}
          </Typography>
        </Box>

        {/* Actions */}
        <Button
          fullWidth
          sx={{
            mb: 2,
            py: 1.3,
            borderRadius: "12px",
            backgroundColor: "#2563eb",
            color: "#fff",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#1e40af" },
          }}
        >
          Edit Profile
        </Button>

        <Button
          fullWidth
          sx={{
            py: 1.3,
            borderRadius: "12px",
            backgroundColor: "#f1f5f9",
            color: "#0f172a",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#e2e8f0" },
          }}
        >
          Logout
        </Button>
      </Paper>
    </Box>
  );
}

export default Profile;

