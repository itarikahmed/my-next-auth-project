import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto justify-center items-center p-4 flex flex-col min-h-screen">
      <div className="text-center m-10">
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
