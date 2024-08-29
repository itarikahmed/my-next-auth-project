import React from "react";
import Navbar from "@/components/Navbar";
const Home = () => {
  return (
    <div className="container mx-auto justify-start items-center p-4 flex flex-col min-h-screen">
      <Navbar />
      <div className="text-center m-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to our website!</h1>
        <p className="text-lg">
          This is a website that uses Next.js and NextAuth.js for
          authentication.
        </p>
      </div>
    </div>
  );
};

export default Home;
