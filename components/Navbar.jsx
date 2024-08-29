"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    router.push("/profile");
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className="container mx-auto">
      <div className="m-6 flex justify-between items-center">
        <div className="font-bold text-2xl p-2">Next-Auth</div>
        <div>
          {" "}
          <ul className="">
            <li className="">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="px-6 py-3 bg-blue-600 rounded-md text-white text-lg font-medium tracking-wide"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="px-6 py-3 bg-blue-600 rounded-md text-white text-lg font-medium tracking-wide"
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
