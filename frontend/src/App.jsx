import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";

import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";

import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const { theme } = useThemeStore();
  const auth = true;

  // console.log({ onlineUsers });

  // useEffect(() => {
  //   checkAuth();
  // }, [checkAuth]);

  console.log({ isCheckingAuth });
  console.log({ checkAuth });
  console.log({ authUser });

  // if (isCheckingAuth && !authUser)
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <Loader className="size-10 animate-spin" />
  //     </div>
  //   );

  return (
    <div data-theme={theme}>
      <Navbar />

      <Routes>
        <Route path="/" element={auth ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!auth ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!auth ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={auth ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>

      <Toaster />
    </div>
  );
};
export default App;
