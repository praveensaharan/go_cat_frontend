import React from "react";
import Navbar from "../components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

function NotFoundPage() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Navbar />
      {isAuthenticated ? (
        <div>
          <h1>404 Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
        </div>
      ) : (
        <div>
          <h1>Access Denied</h1>
          <p>Sorry, you do not have access to this page. Please login first.</p>
        </div>
      )}
    </>
  );
}

export default NotFoundPage;
