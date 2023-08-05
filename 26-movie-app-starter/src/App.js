import React from "react";
import Register from "./pages/Register";
import AuthContextProvider from "./context/authContex";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
    <AuthContextProvider>
      <Navbar/>
      <Register />
      </AuthContextProvider>
      
    </div>
  );
};

export default App;
