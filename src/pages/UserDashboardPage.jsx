import React from "react";
import TopBar from "../components/dashboard/TopBar";
import DashboardLayout from "./DashboardLayout";
import { Outlet } from "react-router-dom";

function UserDashboardPage() {
  return (
    <>
      <TopBar />
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </>
  );
}

export default UserDashboardPage;

