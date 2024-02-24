import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route from react-router-dom
import HomePage from "./Pages/Hwo";
import Play from "./Pages/Play";
import NotFoundPage from "./Pages/Notfound";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {isAuthenticated && <Route path="/play" element={<Play />} />}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
