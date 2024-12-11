import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch("/api/checksession");
        if (!response.ok) {
          navigate("/login");
          return;
        }

        const data = await response.json();
        setUser(data.user);
      } catch (err) {
        console.error("Error checking session:", err);
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();
  }, [navigate]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    navigate("/login"); // Redirect ke halaman login
  };  

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="dashboard">
      {user ? (
        <>
          <h2>Welcome, {user.email}</h2>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </>
      ) : (
        <p>Session not found. Redirecting...</p>
      )}
    </div>
  );
};

export default Dashboard;
