import React, { useEffect, useState } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/register";
// import Profile from "./components/profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./components/firebase";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  const [user, setUser] = useState(null);
  const [city, setCity] = useState("");

  const handleSearch = (c) => {
    setCity(c);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <ToastContainer />
        {user ? (
          <div className="min-h-svh flex flex-col justify-center items-center text-white bg-[url('/src/assets/images/bg.svg')] bg-cover bg-center bg-bg">
            <Header onSearch={handleSearch} />
            <Main city={city} />
            <Footer />
          </div>
        ) : (
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/profile" element={<Navigate to="/login" />} />
              </Routes>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}
