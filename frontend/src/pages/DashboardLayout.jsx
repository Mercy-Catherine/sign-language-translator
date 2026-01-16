// import React from "react";
// import { Box } from "@mui/material";
// import Sidebar from "../components/dashboard/Sidebar";

// const TOPBAR_HEIGHT = 96;
// const SIDEBAR_WIDTH = 260;

// function DashboardLayout({ children }) {
//   return (
//     <>
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main content */}
//       <Box
//         sx={{
//           marginTop: `${TOPBAR_HEIGHT}px`,
//           marginLeft: `${SIDEBAR_WIDTH}px`,
//           minHeight: `calc(100vh - ${TOPBAR_HEIGHT}px)`,
//           backgroundColor: "#f4f7fb",
//           p: 4,
//         }}
//       >
//         {children}
//       </Box>
//     </>
//   );
// }

// export default DashboardLayout;


import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/dashboard/Sidebar";

function DashboardLayout({ children }) {
  return (
    <>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        sx={{
          marginLeft: "260px", // ✅ same as sidebar width
          marginTop: "96px",   // ✅ same as topbar height
          minHeight: "calc(100vh - 96px)",
          backgroundColor: "#f8fafc",
          p: 4,
        }}
      >
        {children}
      </Box>
    </>
  );
}

export default DashboardLayout;
