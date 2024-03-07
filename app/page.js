import React from "react";
// import { AuthContext } from "./AuthContext";

const Home = () => {
  // const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to our website!</h1>
        <div>
          <p className="text-lg">Logged in as:</p>
          <p className="text-lg font-bold">name</p>
          <p className="text-lg">Email</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
