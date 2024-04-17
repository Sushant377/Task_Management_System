import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/loginPage/Login";
import LoginLayout from "./components/loginLayout/LoginLayout";
import Register from "./pages/registerpage/Register";
import MainLayout from "./components/mainlayout/MainLayout";
import ProtectedRoute from "./components/protected/ProtectedRoute";
import ErrorPage from "./components/ErrorPage";
import Profile from "./pages/profile/Profile";
import Dashboard from "./pages/dashboard/Dashboard";
import CardDesc from "./pages/dashboard/components/CardDesc";
import Timeline from "./pages/profile/components/Timeline";
import ProfileAbout from "./pages/profile/components/ProfileAbout";
import ForgotPassword from "./components/forgotpassword/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route
        path="/user"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="profile" element={<Profile />}>
          <Route path="timeline" element={<Timeline />} />
          <Route index element={<ProfileAbout />} />
        </Route>
        <Route index element={<Dashboard />} />
        <Route path="task/:id" element={<CardDesc />} />
      </Route>

      <Route path="/" element={<LoginLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgotpass" element={<ForgotPassword />} />
        <Route index element={<Navigate to={"/login"} />} />
      </Route>
    </Routes>
  );
}

export default App;
