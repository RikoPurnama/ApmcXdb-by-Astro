// src/pages/Dashboard.tsx
import React, { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Memeriksa sesi pengguna
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error || !data.session) {
        console.error("Sesi tidak ditemukan:", error?.message);
        navigate("/login");
      } else {
        setUser(data.session.user);
      }
      setIsLoading(false); // Hentikan loading setelah selesai memeriksa
    };

    checkSession();

    // Membersihkan listener saat komponen unmount
    return () => {
      setUser(null);
      setIsLoading(false);
    };
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
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
