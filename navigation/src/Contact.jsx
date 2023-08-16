import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const loc=useLocation()
  console.log(loc)
  const goto = () => {
    navigate("/About");
  };
  return (
    <div>
      <h1> This is contact page</h1>
      <button onClick={goto}>Go to about</button>
    </div>
  );
}