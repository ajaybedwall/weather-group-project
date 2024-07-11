/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { auth } from "./firebase"; // Ensure the correct path to your firebase.js
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom"; // Assuming you are using react-router-dom for navigation

export default function Search({ onSearch }) {
  const [value, setValue] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(value);
    setValue("");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form
        className="max-w-64 w-full p-4 flex justify-between items-center gap-2 border border-white border-opacity-25 rounded-full bg-white bg-opacity-25 shadow-[0_0_16px_0_rgba(255,255,255,0.25)] backdrop-blur mb-4"
        onSubmit={handleSubmit}
      >
        <i className="fa-solid fa-magnifying-glass opacity-75"></i>
        <input
          className="w-full outline-0 bg-transparent placeholder:text-white placeholder:opacity-75"
          placeholder="Search your city"
          name="search"
          type="text"
          value={value}
          onChange={handleChange}
        ></input>
      </form>
      <div className="flex justify-center items-center gap-4">
        {user ? (
          <>
            <button
              onClick={handleLogout}
              className="bg-sky-400 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded ml-96 -mt-20"
            >
              Logout
            </button>
            {/* <Link to="/profile">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Profile
              </button>
            </Link> */}
          </>
        ) : (
          <Link to="/login">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
