import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";

// import Home from "./components/pages/Home/Home";
import SignIn from "./components/features/SignIn";
import SignUp from "./components/features/SignUp";
import DataTable from "./components/features/UserTable";
import GraduatesProvider from "./contexts/graduates";
import Events from "./components/pages/Events/Events";
import Graduates from "./components/pages/Graduates/Graduates";
import Post from "./components/pages/Post/Post";
import Jobs from "./components/pages/Jobs/Jobs";
import Calendar from "./components/pages/Calendar/Calendar";

function Router() {
  return (
    <>
      <GraduatesProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/Events" element={<Events />} />
          <Route path="/Graduates" element={<Graduates />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/users" element={<DataTable />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        </Routes>
      </GraduatesProvider>
    </>
  );
}

export default Router;
