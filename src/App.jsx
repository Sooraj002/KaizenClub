import "./index.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config.jsx";
import LogIn from "./pages/LogIn/LogIn.jsx";
import SignIn from "./pages/SignUp/SignUp.jsx";
import Home from "./pages/Home/Home";
import Members from "./pages/Members/Members.jsx";
import Projects from "./components/Projects/Projects.jsx";
import JoinUs from "./pages/JoinUs/JoinUs.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";

const App = () => {
  const [user] = useAuthState(auth);

  const handleLoginRedirect = async () => {
    return user ? "/kaizen-portfolio/home" : "/kaizen-portfolio/login"; // Redirect to appropriate route
  };

  return (
    <Router>
      <Routes>
        <Route path="/KaizenClub/" element={<LogIn />} />
        <Route path="/KaizenClub/signup" element={<SignIn />} />
        <Route path="/KaizenClub/home" element={<Home />} />
        <Route path="/KaizenClub/members" element={<Members />} />
        <Route path="/KaizenClub/projects" element={<Projects />} />
        <Route path="/KaizenClub/join-us" element={<JoinUs />} />
        {/* Optional redirect route for login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
