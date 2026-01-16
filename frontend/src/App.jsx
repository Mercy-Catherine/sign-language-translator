import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserDashboardPage from "./pages/UserDashboardPage";

// Dashboard components
import DashboardHome from "./components/dashboard/DashboardHome";
import MyVideos from "./components/dashboard/MyVideos";
import UploadVideo from "./components/dashboard/UploadVideo";
import Profile from "./components/dashboard/Profile";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public pages */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Dashboard with nested routes */}
        <Route path="/dashboard" element={<UserDashboardPage />}>
          <Route index element={<DashboardHome />} />
          <Route path="my-videos" element={<MyVideos />} />
          <Route path="upload" element={<UploadVideo />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

