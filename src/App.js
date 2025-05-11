import React, { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    API.get("/")
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch(() => {
        setMessage("Error fetching message");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <h1>Frontend is running 🚀</h1>
      <h2>Backend says:</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;
