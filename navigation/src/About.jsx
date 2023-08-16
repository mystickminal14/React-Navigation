import React, { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

export default function About() {
  const { name } = useParams();
  const navi = useNavigate();
  const goback = () => {
    navi(-1);
  };
  const [search, setSearch] = useState();
  const ch = (e) => {
    const value = e.target.value;
    setSearch(search);
  };
  const [ne,newval]=useState()
  const clicked=()=>{
newval(search)
  }

  return (
    <div>
      <h1> this is{name} about us page</h1>
      <button onClick={goback}>goback</button>
      <br />
      <div className="search">
        <input type="text" onChange={ch} value={ne} placeholder='search any items' />
        <button onClick={clicked}>Search</button>
      </div>
     
    </div>
  );
}
